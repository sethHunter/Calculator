import { Box } from "@mui/material";
import PropTypes from "prop-types";
import Plot from "./Plot";

const Graph = ({operand}) => {
  return (
    <Box className="graph">
      <h1>Graphing: {operand}</h1>
      <Plot
        className="function-plot"
        operand={operand}
        options={{
          grid: true,
          yAxis: { domain: [-5, 5] },
          data: [
            {
              fn: String(operand),
              color: "cyan",
            },
          ],
        }}
      />
    </Box>
  );
};

Graph.defaultProps = {
  operand: String,
};


Graph.propTypes = {
  operand: PropTypes.any,
};

export default Graph;