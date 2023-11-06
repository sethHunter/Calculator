import "./styles.css";
import "./calculator/Calculator.js";
import Calculator from "./calculator/Calculator.js";
import { Container } from "@mui/material";

function App() {
  return (
    <Container>
      <Calculator />
    </Container>
  );
}

export default App;