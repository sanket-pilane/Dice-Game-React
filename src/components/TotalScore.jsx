import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <TotalScoreContaner>
      <h1>{score}</h1>
      <p>Total Score</p>
    </TotalScoreContaner>
  );
};

export default TotalScore;

const TotalScoreContaner = styled.div`
  text-align: center;
  max-width: 150px;
  h1 {
    font-size: 90px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
