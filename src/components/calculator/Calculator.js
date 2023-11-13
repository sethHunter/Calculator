import React from "react";
import "./calculator.css";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
import { ACTIONS } from "../../constants";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

const Calculator = ({operand, dispatch}) => {
  return (
    <div className="calculator-grid">
      <Box className="output">
        <div className="operand">{operand}</div>
      </Box>
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
      <button
        className="span-two"
        onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
      >
        DELETE
      </button>
      <button
        className="span-three"
        onClick={() => dispatch({ type: ACTIONS.SOLVE })}
      >
        =
      </button>
    </div>
  );
};

Calculator.defaultProps = {
  operand: String,
  dispatch: React.DispatchWithoutAction,
};

Calculator.propTypes = {
  operand: PropTypes.any,
  dispatch: PropTypes.any,
};

export default Calculator;
