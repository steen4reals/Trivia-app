function EndGame({ score }) {
  return (
    <div className="App">
      <h1>{score >= 5 ? "You are epic, you truly belong among the Gods!" : "Congratulations, you are the God of Stupidity."}</h1>
      <p>Final score: {score}</p>
    </div>
  );
}

export default EndGame;
