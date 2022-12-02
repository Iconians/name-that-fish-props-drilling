export const FinalScore = ({ correct, total }) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{correct}</p>
      <hr />
      <p>{total}</p>
    </div>
  </div>
);
