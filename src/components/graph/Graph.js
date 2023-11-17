import { Box, Card } from "@mui/material";
import PropTypes from "prop-types";
import Plot from "./Plot";
import "./graph.css"

// Graph UI
const Graph = ({ operand }) => {
  return (
    <Box
      sx={{
        color: "rgb(255, 255, 255)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Card sx={{margin: "2rem", color: "white", backgroundColor: "rgba(0, 0, 0, 0)"}}>
        <h1>Graphing</h1>
      </Card>

      <Card
        className="graph"
        sx={{
          color: "rgb(255, 255, 255)",
          stroke: "rgb(255, 255, 255)",
          margin: "1rem",
          backgroundColor: "rgba(0, 0, 0, .3)"   
        }}
      >
        <Plot
          operand={operand}
          options={{
            grid: true,
            yAxis: { domain: [-5, 5] },
            data: [
              {
                fn: String(operand),
                color: "darkorange",
              },
            ],
          }}
        />
      </Card>
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
