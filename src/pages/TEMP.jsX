import { useState, useEffect } from 'react';
import '../App.css';
import Ctx from '../context/Ctx1';
import Board from "../Board";

function Game1() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);
  const [cnt, updCnt] = useState(board.length);
  const [win, setWin] = useState(false);
  const setCnt = (n) => {
    if (n) {
      updCnt(n);
    } else {
      updCnt(cnt - 1);
    }
  }
  useEffect(() => {
    // let upd = false;
    if (cnt === 0 && window.confirm('Ходов больше нет. Запустить игру с начала?')) {
      setBoard(["", "", "", "", "", "", "", "", ""]);
      setCnt(board.length);

    }
  }, [cnt]);

  useEffect(() => {
    if (win && window.alert(`${player ? "X" : "O"} выиграл!`)) {
      setBoard(["", "", "", "", "", "", "", "", ""]);
      setCnt(board.length);
      // setWin(false)
    }
  }, [win]);


  useEffect(() => {
    let b = [...board];
    let p;
    if (b[0] && b[0] === b[1] && b[0] === b[2]) {
      p = b[0] === "x";
      setPlayer(p);
      setWin(true);
    } else if (b[3] && b[3] === b[4] && b[3] === b[5]) {
      p = b[3] === "x";
      setPlayer(p);
      setWin(true);
    } else if (b[6] && b[6] === b[7] && b[6] === b[8]) {
      p = b[6] === "x";
      setPlayer(p);
      setWin(true);
    } else if (b[0] && b[0] === b[3] && b[0] === b[6]) {
      p = b[0] === "x";
      setPlayer(p);
      setWin(true);
    } else if (b[1] && b[1] === b[4] && b[1] === b[7]) {
      p = b[1] === "x";
      setPlayer(p);
      setWin(true);
    } else if (b[2] && b[2] === b[5] && b[2] === b[8]) {
      p = b[2] === "x";
      setPlayer(p);
      setWin(true);
    } else if (b[0] && b[0] === b[4] && b[0] === b[8]) {
      p = b[0] === "x";
      setPlayer(p);
      setWin(true);
    } else if (b[2] && b[2] === b[4] && b[2] === b[6]) {
      p = b[2] === "x";
      setPlayer(p);
      setWin(true);
    }
  }, [board]);


  return <Ctx.Provider value={{
    board: board, 
    setBoard: setBoard,
    player: player,
    setPlayer: setPlayer,
    cnt: cnt,
    setCnt: setCnt
  }}>
    <Board/>
  </Ctx.Provider>
}

export default Game1;
