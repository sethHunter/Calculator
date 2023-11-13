import "./styles.css";
import { Box, Container } from "@mui/material";
import Calculator from "./components/calculator/Calculator";
import { useReducer } from "react";
import Graph from "./components/graph/Graph";
import reducer from "./functions/reducer.js";

const App = () => {
  const [{ operand }, dispatch] = useReducer(reducer, {});

  return (
    <Container>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Calculator operand={operand} dispatch={dispatch} />
        <Graph operand={operand} />
      </Box>
    </Container>
  );
};

export default App;
