import React from "react";
import "./calculator.css";
import CalculatorButton from "./CalculatorButton";
import { ACTIONS } from "../../constants";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

// Calculator UI
const Calculator = ({ operand, dispatch }) => {
  return (
    <div className="calculator-grid">
      <Box className="output">
        <div className="operand">{operand}</div>
      </Box>

      {/* Row 1 */}
      <CalculatorButton digit="cos" dispatch={dispatch} />
      <CalculatorButton digit="tan" dispatch={dispatch} />
      <CalculatorButton digit="(" dispatch={dispatch} />
      <CalculatorButton digit=")" dispatch={dispatch} />
      <button
        className="span-two"
        onClick={() => dispatch({ type: ACTIONS.CLEAR })}
      >
        AC
      </button>

      {/* Row 2 */}
      <CalculatorButton digit="csc" dispatch={dispatch} />
      <CalculatorButton digit="sec" dispatch={dispatch} />
      <CalculatorButton digit="1" dispatch={dispatch} />
      <CalculatorButton digit="2" dispatch={dispatch} />
      <CalculatorButton digit="3" dispatch={dispatch} />
      <CalculatorButton digit="÷" dispatch={dispatch} />

      {/* Row 3 */}
      <CalculatorButton digit="cot" dispatch={dispatch} />
      <CalculatorButton digit="sin" dispatch={dispatch} />
      <CalculatorButton digit="4" dispatch={dispatch} />
      <CalculatorButton digit="5" dispatch={dispatch} />
      <CalculatorButton digit="6" dispatch={dispatch} />
      <CalculatorButton digit="*" dispatch={dispatch} />

      {/* Row 4 */}
      <CalculatorButton digit="√" dispatch={dispatch} />
      <CalculatorButton digit="π" dispatch={dispatch} />
      <CalculatorButton digit="7" dispatch={dispatch} />
      <CalculatorButton digit="8" dispatch={dispatch} />
      <CalculatorButton digit="9" dispatch={dispatch} />
      <CalculatorButton digit="-" dispatch={dispatch} />

      {/* Row 5 */}
      <CalculatorButton digit="^" dispatch={dispatch} />
      <CalculatorButton digit="x" dispatch={dispatch} />
      <CalculatorButton digit="!" dispatch={dispatch} />
      <CalculatorButton digit="0" dispatch={dispatch} />
      <CalculatorButton digit="." dispatch={dispatch} />
      <CalculatorButton digit="+" dispatch={dispatch} />

      {/* Row 6 */}
      <button
        className="span-three"
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
