/* This code snippet is a React component called `Tic` that implements a Tic Tac Toe game. Here's a
breakdown of what the code does: */
import React, { useRef, useState } from 'react';
import './Tic.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';

const Tic = () => {
  const [data, setData] = useState(Array(9).fill(""));
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const titleRef = useRef(null);

  const toggle = (index) => {
    if (lock || data[index] !== "") return;

    const newData = [...data];
    newData[index] = count % 2 === 0 ? "x" : "o";
    setData(newData);
    setCount(count + 1);
    checkWin(newData);
  };

  const checkWin = (currentData) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (
        currentData[a] &&
        currentData[a] === currentData[b] &&
        currentData[b] === currentData[c]
      ) {
        declareWinner(currentData[a]);
        return;
      }
    }

    // Optional: check for draw
    if (!currentData.includes("")) {
      titleRef.current.innerHTML = "It's a Draw!";
      setLock(true);
    }
  };

  const declareWinner = (winner) => {
    setLock(true);
    titleRef.current.innerHTML = `🎉 CONGRATULATIONS! ${winner.toUpperCase()} Wins!`;
  };

  const resetGame = () => {
    setData(Array(9).fill(""));
    setCount(0);
    setLock(false);
    titleRef.current.innerHTML = "Tic Tac Toe Game in React";
  };

  const renderBox = (index) => (
    <div className="boxes" onClick={() => toggle(index)}>
      {data[index] === "x" && <img src={cross_icon} alt="X" />}
      {data[index] === "o" && <img src={circle_icon} alt="O" />}
    </div>
  );

  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>
        Tic Tac Toe Game in <span>React</span>
      </h1>

      <div className="board">
        <div className="row1">
          {renderBox(0)}
          {renderBox(1)}
          {renderBox(2)}
        </div>
        <div className="row2">
          {renderBox(3)}
          {renderBox(4)}
          {renderBox(5)}
        </div>
        <div className="row3">
          {renderBox(6)}
          {renderBox(7)}
          {renderBox(8)}
        </div>
      </div>

      <button className="reset" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
};

export default Tic;
