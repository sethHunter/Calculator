import { ACTIONS } from "../../constants";

const OperationButton = ({ dispatch, operation }) => {
  return (
    <button onClick={() => dispatch({ type: ACTIONS.OPERATION, payload: { operation } })}>
      {operation}
    </button>
  );
};

export default OperationButton;
