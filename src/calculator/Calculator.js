import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
import { useReducer } from "react";
import "./calculator.css";
import Plot from "../graph/Plot";
import { Box } from "@mui/material";

export default function Calculator() {
  const [{ operand }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <Box sx={{display: 'flex', flexDirection: 'row'}}>
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">
            {operand}
          </div>
        </div>
        <DigitButton digit="cos" dispatch={dispatch} />
        <DigitButton digit="tan" dispatch={dispatch} />
        <DigitButton digit="(" dispatch={dispatch} />
        <DigitButton digit=")" dispatch={dispatch} />
        <button
          className="span-two"
          onClick={() => dispatch({ type: ACTIONS.CLEAR })}
        >
          AC
        </button>

        <DigitButton digit="csc" dispatch={dispatch} />
        <DigitButton digit="sec" dispatch={dispatch} />
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <OperationButton operation="÷" dispatch={dispatch} />

        <DigitButton digit="cot" dispatch={dispatch} />
        <DigitButton digit="sin" dispatch={dispatch} />
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <OperationButton operation="*" dispatch={dispatch} />

        <DigitButton digit="<" dispatch={dispatch} />
        <DigitButton digit=">" dispatch={dispatch} />
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <OperationButton operation="-" dispatch={dispatch} />

        <DigitButton digit="≤" dispatch={dispatch} />
        <DigitButton digit="≥" dispatch={dispatch} />
        <DigitButton digit="!" dispatch={dispatch} />
        <DigitButton digit="0" dispatch={dispatch} />
        <DigitButton digit="." dispatch={dispatch} />
        <OperationButton operation="+" dispatch={dispatch} />
        
        <DigitButton digit="x" dispatch={dispatch} />
        <button className="span-two" onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
          DELETE
        </button>
        <button
          className="span-three"
          onClick={() => dispatch({ type: ACTIONS.SOLVE })}
        >
          =
        </button>
        {/* <DigitButton digit="=" dispatch={dispatch} /> */}
        {/* <DigitButton digit="y" dispatch={dispatch} /> TODO will set up another function to graph when wanted*/}

      </div>
      <div>
        <Plot className = "function-plot"
          options={{
            grid: true,
            yAxis: { domain: [-5, 5] },
            data: [
              {
                fn: operand, color: "white"
              },
            ],
          }}
        />
      </div>
    </Box>
  );
}

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  DELETE_DIGIT: "delete-digit",
  SOLVE: "solve",
  OPERATION: "operation",
  CLEAR: "clear",
};

function evaluate({ operand }) {
  try {
    const math = require('mathjs')
    return math.evaluate(operand)
  } catch (error) {
    return ""
  }
}

// const INTERGER_FORMATTER = new Intl.NumberFormat("en-us", {
//   maximumFractionDigits: 0,
// });

// function formatOperand(operand) {
//   if (operand == null) return;
//   const [integer, decimal] = operand.split(".");
//   if (decimal == null) return INTERGER_FORMATTER.format(integer);
//   return `${INTERGER_FORMATTER.format(integer)}.${decimal}`;
// }

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        if (payload.digit === ".")
          return {
            ...state,
            operand: `0${payload.digit}`,
            overwrite: false,
          };

        return {
          ...state,
          operand: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === "0" && state.operand === "0") return state;

      if (payload.digit === "." && !state.operand)
        return {
          ...state,
          operand: `0${payload.digit}`,
        };

      if (payload.digit === "." && state.operand.includes("."))
        return state;

        if (payload.digit.includes("sin") || payload.digit.includes("tan") || payload.digit.includes("csc") || payload.digit.includes("sec") || payload.digit.includes("cot") || payload.digit.includes("sin")) {
          return {
            ...state,
            operand:`${state.operand || ""}${payload.digit}` + '(',
          };
        } else {
          return {
            ...state,
            operand: `${state.operand || ""}${payload.digit}`,
          };
        }

    case ACTIONS.OPERATION:
      if (state.operand != null) {
        if(payload.operation === "÷") {
          return {
            ...state,
            operand: `${state.operand || ""}` + '/',
          };
        } else {
          return {
            ...state,
            operand: `${state.operand || ""}${payload.operation}`,
          };
        }
      } else {
        return {
          ...state,
          operand: state.operand,
        };
      }

    case ACTIONS.CLEAR:
      return {};

    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite)
        return {
          ...state,
          overwrite: null,
          operand: null,
        };

      if (state.operand == null) return state;
      if (state.operand.length === 1)
        return {
          ...state,
          operand: null,
        };

      return {
        ...state,
        operand: state.operand.slice(0, -1),
      };

    case ACTIONS.SOLVE:
      if (
        state.operand == null 
      ) {
        return state;
      }
      
      const solution = evaluate(state)

      if(solution != ""){
        return {
          ...state,
          overwrite: true,
          operand: solution,
        };
      } else {
        return {
          ...state,
          overwrite: true,
          operand: state.currentOperand,
        };
      }
  }
}
