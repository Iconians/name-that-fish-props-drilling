import "./App.css";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import { useState } from "react";
import "./Components/styles/final-score.css";
import { FinalScore } from "./Components/FinalScore";
import { Images } from "./assets/images";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

function App() {
  const [inputValue, setInputValue] = useState("");
  const [fishArr, setFishArr] = useState(initialFishes);
  const [inCorrect, setIncorrect] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [correctFish, SetCorrectFish] = useState(
    fishArr.length ? fishArr[0].name : null
  );

  const inputAnswer = () => {
    if (correctFish === inputValue) {
      const filter = fishArr.filter((fish) => fish.name !== inputValue);
      setFishArr(filter);
      setCorrect(correct + 1);
      SetCorrectFish(filter.length ? filter[0].name : null);
      setInputValue("");
    } else {
      const filter = fishArr.filter((fish) => fish.name !== correctFish);
      setFishArr(filter);
      setIncorrect(inCorrect + 1);
      SetCorrectFish(filter.length ? filter[0].name : null);
      setInputValue("");
    }
  };

  return (
    <div className="App">
      <header>
        {fishArr.length ? (
          <div>
            <ScoreBoard
              correct={correct}
              inCorrect={inCorrect}
              fishArr={fishArr}
            />
            <GameBoard
              onChangeInput={setInputValue}
              answer={inputAnswer}
              fishArr={fishArr}
              inputValue={inputValue}
            />
          </div>
        ) : (
          <FinalScore correct={correct} total={initialFishes.length} />
        )}
      </header>
    </div>
  );
}

export default App;
