import { useEffect, useState, useContext } from "react";
import "./style.css"
import Ctx from "../../context/Ctx2";
import Modal from "./modal";

export default function SuCard({ n, content }) {
  const {data, board, setBoard} = useContext(Ctx);
 
  const row = Math.floor(n / board.length);
  const column = n - row * board.length;
  const [val, setVal] = useState(0);
  const [validRow, setValidRow] = useState(true);
  const [validColumn, setValidColumn] = useState(true);
  // console.log('init', {n, validRow, validColumn});
  const [mActive, setMActive] = useState(false);
  const [cellStyle, setCellStyle] = useState({
    color: validRow && validColumn ? "springgreen" : "crimson",
  });
  const checkRow = () => {
    for (let t = 0; t < board[row].length; t++) {  
      if (board[row][t]  && (row * board.length + t !== n)) {
        if (+board[row][t] === +val) {
          // совпадение по оси Х найдено!
          setValidRow(false);
          break;
        }
      }
    }
  };
  const checkCol = () => {
    for (let t = 0; t < board.length; t++) {
      console.log(t * board.length + column, n, t, column, val)
      if (board[t][column] && (t * board.length + column !== n)){
        if (+board[t][column] === +val) {
          // совпадение по оси Y найдено!

          setValidColumn(false);
          break;
        }
      }
    }
  };

  useEffect(() => {
    checkCol();
    checkRow();
    // console.log(r,c);
  }, [board]);

  useEffect(() => {
    if(val && val !== content) {
      setBoard((prev) => {
        console.log(prev);
        let arr = [...prev];
        let cnt = arr.length;
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr.length; j++) {
            if (i * cnt + j === n) {
              arr[i][j] = val;
              return arr;
            }
          }
        }
        return arr;
      });
    }
  }, [val])

  useEffect(() => {
    console.log(validColumn, validRow)
    setCellStyle({
      color: validRow && validColumn ? "springgreen" : "crimson"
    })
  
  }, [validRow, validColumn]);

  
  const setStep = (e) => {
    // setVal(e.target.value);
    setMActive(true);
   
  };

  return (
    <div className={data[n] !== "-" ? "card inactive" : "card"} onClick={setStep}>
      {content ? (
        <span style={data[n] === "-" ? cellStyle : {}}>{content}</span>) : <span></span>
        // <select onChange={setStep} value={content}>
        //   <option value={null}></option>
        //   <option>1</option>
        //   <option>2</option>
        //   <option>3</option>
        //   <option>4</option>
        //   <option>5</option>
        //   <option>6</option>
        //   <option>7</option>
        //   <option>8</option>
        //   <option>9</option>
        // </select>
        
      }
      {data[n] ==="-" && <Modal setActive={setMActive} setVal={setVal} active={mActive}/>}
      <span className="card-index">{n}</span>
    </div>
  );
}
