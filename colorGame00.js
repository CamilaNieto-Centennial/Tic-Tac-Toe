const Square = ({id, player}) => {

  const [color, setColor] = React.useState('darkRed');
  const palet = ["darkRed", "darkGreen", "purple"];
  const getRandomColor = () => palet[Math.floor(Math.random() * 3)];

  React.useEffect(() => {
    console.log(`Render ${id}`);
    return () => console.log(`Unmounting Square ${id}`);
  })
  
  return (
  <button onClick={e => {
    setColor(getRandomColor());
    e.target.style.background = color;
  }}>
    <h1>{player}</h1>
  </button>
  );
};

const Board = () => {
  const [player, setPlayer] = React.useState(1);
  console.log('Board re-rendering now.');

  const [mounted, setMounted] = React.useState(true);
  const [random, setRandom] = React.useState(0);

  let status = `Player ${player}`;
  console.log(`Status Player ${status}`);

  const toggle = () => setMounted(!mounted);
  const reRender = () => setRandom(Math.random());

  function renderSquare(i) {
    return <Square id={i} player={player}></Square>
  }
  return (
    <div
      className="game-board"
      /*onClick={(e) => {
        setPlayer((player + 1) % 2)
        status = `Player ${player}`;
      }}*/
    >
      <div className="grid-row">
        {mounted && renderSquare(0)}
        {mounted && renderSquare(1)}
        {mounted && renderSquare(2)}
      </div>
      <div id="info">
        <button onClick={toggle}>Show/Hide Row</button>
        <button onClick={reRender}>Re-render</button>
        <h1>{status}</h1>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
