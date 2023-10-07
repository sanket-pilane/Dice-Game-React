import styled from "styled-components";
import { Button } from "../styled/Buttons";
const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="Dice" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1150px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  .content {
    display: flex;
    flex-direction: column;
    align-items: end;
    h1 {
      font-size: 90px;
      white-space: nowrap;
    }
  }
`;
