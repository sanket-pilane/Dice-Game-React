import React from "react";
import StartGame from "./components/StartGame";

import { useState } from "react";
import PlayGame from "./components/PlayGame";

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGame = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>{isGameStarted ? <PlayGame /> : <StartGame toggle={toggleGame} />}</>
  );
};

export default App;
