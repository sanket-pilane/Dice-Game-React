import { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({
  error,
  setError,
  seletedNumber,
  setSelectedNumber,
}) => {
  const arrayNumber = [1, 2, 3, 4, 5, 6];

  const numberErrorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelectionContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrayNumber.map((value, i) => (
          <Box
            key={i}
            isSelected={value === seletedNumber}
            onClick={() => numberErrorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectionContainer>
  );
};

export default NumberSelector;

const NumberSelectionContainer = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;
  gap: 10px;
  .flex {
    display: flex;
    gap: 20px;
  }
  p {
    font-weight: 700;
    font-size: 20px;
  }
  .error {
    color: red;
  }
`;

const Box = styled.div`
  cursor: pointer;
  height: 64px;
  width: 64px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 22px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  transition: 0, 3s, background ease-in;
`;
