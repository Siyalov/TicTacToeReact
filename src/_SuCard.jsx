import { useEffect, useState } from "react";

export default function SuCard({ n, content, setBoard, board }) {
  const row = Math.floor(n / board.length);
  const column = n - row * board.length;
  const [val, setVal] = useState(0);
  const [validRow, setValidRow] = useState(true);
  const [validColumn, setValidColumn] = useState(true);
  console.log('init', {n, validRow, validColumn});
  const [cellStyle, setCellStyle] = useState({
    color: validRow && validColumn ? "springgreen" : "crimson",
  });
  const checkRow = () => {
    for (let t = 0; t < board[row].length; t++) {
      if (board[row][t]) {
        if (+board[row][t] === +val) {
          // совпадение по оси Х найдено!
          setValidRow(false);
          return;
        }
      }
    }
    setValidRow(true);
  };
  const checkCol = () => {
    for (let t = 0; t < board.length; t++) {
      if (board[t][column]) {
        if (+board[t][column] === +content) {
          // совпадение по оси Y найдено!
          setValidColumn(false);
          return;
        }
      }
    }
    setValidColumn(true);
  };

  useEffect(() => {
    checkCol();
    checkRow();
    // console.log('change', {n, validRow, validColumn});
  }, [val]);

  useEffect(() => {
    // console.log('row/col', {n, validRow, validColumn});
    setCellStyle({
      color: validRow && validColumn ? "springgreen" : "crimson",
    });
  }, [validRow, validColumn]);

  const setStep = (e) => {
    setVal(e.target.value);
    setBoard((prev) => {
      console.log(prev);
      let arr = [...prev];
      let cnt = arr.length;
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          if (i * cnt + j === n) {
            arr[i][j] = e.target.value;
            return arr;
          }
        }
      }
      return arr;
    });
  };

  return (
    <div className="card">
      {content ? (
        <span style={cellStyle}>{content}</span>
      ) : (
        <select onChange={setStep} value={content}>
          <option value={null}></option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
        </select>
      )}
      <span className="card-index">{n}</span>
    </div>
  );
}
