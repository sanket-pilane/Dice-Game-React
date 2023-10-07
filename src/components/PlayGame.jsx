import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import DiceRole from "./DiceRole";
import { useState } from "react";
import { Button, OutlinedButton } from "../styled/Buttons";
import Rules from "./Rules";

const PlayGame = () => {
  const [seletedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const diceLoad = () => {
    if (!seletedNumber) {
      setError("You have not selected any number");
      return;
    }
    setError("");
    const randomNumber = generateRandom(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (seletedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          seletedNumber={seletedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>

      <DiceRole currentDice={currentDice} diceLoad={diceLoad} />

      <div className="btns">
        <OutlinedButton onClick={resetScore}>Reset</OutlinedButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide Rules" : "Show Rules"}
        </Button>
      </div>

      {showRules && <Rules />}
    </MainContainer>
  );
};

export default PlayGame;

const MainContainer = styled.main`
  .top_section {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    align-items: end;
  }

  .btns {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;
