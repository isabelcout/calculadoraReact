import React, { useState } from "react";
import styled from "styled-components";

const CalculatorWrapper = styled.div`
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Screen = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  font-size: 1.5em;
  text-align: right;
`;

const Button = styled.button`
  width: 70px;
  height: 50px;
  margin: 5px;
  font-size: 1.2em;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

const App = () => {
  const [expression, setExpression] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setExpression(eval(expression).toString());
      } catch (error) {
        setExpression("Erro");
      }
    } else if (value === "C") {
      setExpression("");
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <CalculatorWrapper>
      <Screen type="text" value={expression} readOnly />
      <div>
        <Button onClick={() => handleButtonClick("7")}>7</Button>
        <Button onClick={() => handleButtonClick("8")}>8</Button>
        <Button onClick={() => handleButtonClick("9")}>9</Button>
        <Button onClick={() => handleButtonClick("/")}>/</Button>
      </div>
      <div>
        <Button onClick={() => handleButtonClick("4")}>4</Button>
        <Button onClick={() => handleButtonClick("5")}>5</Button>
        <Button onClick={() => handleButtonClick("6")}>6</Button>
        <Button onClick={() => handleButtonClick("*")}>*</Button>
      </div>
      <div>
        <Button onClick={() => handleButtonClick("1")}>1</Button>
        <Button onClick={() => handleButtonClick("2")}>2</Button>
        <Button onClick={() => handleButtonClick("3")}>3</Button>
        <Button onClick={() => handleButtonClick("-")}>-</Button>
      </div>
      <div>
        <Button onClick={() => handleButtonClick("C")}>C</Button>
        <Button onClick={() => handleButtonClick("0")}>0</Button>
        <Button onClick={() => handleButtonClick("=")}>=</Button>
        <Button onClick={() => handleButtonClick("+")}>+</Button>
      </div>
    </CalculatorWrapper>
  );
};

export default App;
