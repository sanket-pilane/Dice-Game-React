import { useState } from "react";
import styled from "styled-components";

const DiceRole = ({ currentDice, diceLoad }) => {
  return (
    <DiceContainer>
      <div>
        <img
          onClick={diceLoad}
          src={`/images/dice/dice_${currentDice}.png`}
          alt="Dice 1"
          width="150px"
          height="150px"
        />
      </div>
      <p>Click on dice to roll</p>
    </DiceContainer>
  );
};

export default DiceRole;

const DiceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  margin-top: 40px;

  p {
    font-size: 16px;
    font-weight: 500;
  }
`;
