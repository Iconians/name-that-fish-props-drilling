import "./styles/score-board.css";

export const ScoreBoard = ({ correct, inCorrect, fishArr }) => {
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {inCorrect}</div>
      <div id="choices-left">
        {fishArr.map((answer) => (
          <div key={answer.name} className="choice">
            {answer.name}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correct}</div>
    </div>
  );
};
