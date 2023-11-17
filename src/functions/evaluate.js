// Solves math functions

const evaluate = ({ operand }) => {
  try {
    const math = require("mathjs");
    return math.evaluate(operand);
  } catch (error) {
    return "";
  }
};

export default evaluate;
