import { ACTIONS } from "../../constants";

const CalculatorButton = ({ dispatch, digit }) => {
  return (
    <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}>
      {digit}
    </button>
  );
};

export default CalculatorButton;
