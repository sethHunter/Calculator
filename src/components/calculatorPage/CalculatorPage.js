import reducer from "../../functions/reducer";
import Plot from "../graph/Plot";
import Calculator from "../calculator/Calculator";
import { useReducer } from "react";
import { Box } from "@mui/material";

const CalculatorPage = () => {
  const [{ operand }, dispatch] = useReducer(reducer, {});
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Calculator operand={operand} dispatch={dispatch} />
      <Plot
        className="function-plot"
        options={{
          grid: true,
          yAxis: { domain: [-5, 5] },
          data: [
            {
              fn: operand,
              color: "white",
            },
          ],
        }}
      />
    </Box>
  );
};

export default CalculatorPage;
