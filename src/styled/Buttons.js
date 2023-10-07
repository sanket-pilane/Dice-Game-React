import styled from "styled-components";

export const Button = styled.button`
  background-color: black;
  color: white;
  border-radius: 5px;
  padding: 8px 12px;
  font-size: 16px;
  width: 200px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.4s background ease-out;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;

export const OutlinedButton = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
