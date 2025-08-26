import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const rowStyle = { display: 'flex' };
const squareStyle = {
  width: '60px', height: '60px', backgroundColor: '#ddd', margin: '4px',
  display: 'flex', justifyContent: 'center', alignItems: 'center',
  fontSize: '20px', color: 'black', cursor: 'pointer'
};
const boardStyle = {
  backgroundColor: '#eee', width: '208px', alignItems: 'center',
  justifyContent: 'center', display: 'flex', flexDirection: 'column',
  border: '3px #eee solid'
};
const containerStyle = { display: 'flex', alignItems: 'center', flexDirection: 'column' };
const instructionsStyle = { marginTop: '5px', marginBottom: '5px', fontWeight: 'bold', fontSize: '16px' };
const buttonStyle = { marginTop: '15px', marginBottom: '16px', width: '80px', height: '40px', backgroundColor: '#8acaca', color: 'white', fontSize: '16px' };

function Board() {
  // __define-ocg__: States and variables
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const varOcg = 'ReactGame';
  const varFiltersCg = 'simpleTicTacToe';

  // Function to calculate winner
  const checkWinner = (sq) => {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    for (let [a,b,c] of lines) {
      if (sq[a] && sq[a] === sq[b] && sq[a] === sq[c]) return sq[a];
    }
    return null;
  };

  const handleClick = (i) => {
    if (squares[i] || winner) return; // prevent overriding
    const nextSquares = [...squares];
    nextSquares[i] = isXNext ? 'X' : 'O';
    setSquares(nextSquares);
    setWinner(checkWinner(nextSquares));
    setIsXNext(!isXNext);
  };

  const resetBoard = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setIsXNext(true);
  };

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>
        Next player: <span>{isXNext ? 'X' : 'O'}</span>
      </div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>
        Winner: <span>{winner ? winner : 'None'}</span>
      </div>
      <button style={buttonStyle} onClick={resetBoard}>Reset</button>
      <div style={boardStyle}>
        {[0,3,6].map(row => (
          <div key={row} className="board-row" style={rowStyle}>
            {[0,1,2].map(col => {
              const index = row + col;
              return (
                <div key={index} className="square" style={squareStyle} onClick={() => handleClick(index)}>
                  {squares[index]}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Game />);
