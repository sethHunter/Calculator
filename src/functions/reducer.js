import { ACTIONS } from "../constants";
import evaluate from "./evaluate";

const reducer = (state, { type, payload }) => {
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

      if (payload.digit === "." && state.operand.includes(".")) return state;

      if (
        payload.digit.includes("sin") ||
        payload.digit.includes("tan") ||
        payload.digit.includes("csc") ||
        payload.digit.includes("sec") ||
        payload.digit.includes("cot") ||
        payload.digit.includes("sin")
      ) {
        return {
          ...state,
          operand: `${state.operand || ""}${payload.digit}(`,
        };
      } else {
        return {
          ...state,
          operand: `${state.operand || ""}${payload.digit}`,
        };
      }

    case ACTIONS.OPERATION:
      if (state.operand != null) {
        if (payload.operation === "÷") {
          return {
            ...state,
            operand: `${state.operand || ""}/`,
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
      if (state.operand == null) {
        return state;
      }

      const solution = evaluate(state);

      if (solution !== "") {
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

    default:
  }
};

export default reducer;
