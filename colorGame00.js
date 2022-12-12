const Board = () => {
  const [player, setPlayer] = React.useState(1);
  let status = `Player ${player}`;
  return (
    <div
      className="game-board"
      onClick={(e) => {
        setPlayer((player + 1) % 2)
        status = `Player ${player}`;
      }}
    >
      <div id="info">
        <h1>{status}</h1>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
