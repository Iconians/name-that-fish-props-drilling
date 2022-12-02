import "./styles/game-board.css";

export const GameBoard = ({ onChangeInput, answer, fishArr, inputValue }) => {
  const nextFishToName = fishArr[0];

  const fishInput = ({ target: { value } }) => {
    onChangeInput(value);
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={inputValue}
          onChange={fishInput}
        />
        <input type="submit" onClick={answer} />
      </form>
    </div>
  );
};
