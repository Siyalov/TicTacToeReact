import { useEffect, useState, useContext } from "react";
import Ctx from "../../context/Ctx2";
import Modal from "./modal";
import "./style.css";

export default ({n, content}) => {
    // Math.floor(80 / board.length) = 8 => i
    const {data, board, setBoard} = useContext(Ctx);
    const i = Math.floor(n / board.length);
    const j = n - i * board.length;
    const [val, setVal] = useState(0);
    const [r, setR] = useState(true);
    const [c, setC] = useState(true);
    const [st, setSt] = useState({});
    const [mActive, setMActive] = useState(false);
    const checkRow = () => {
        for (let t = 0; t < board[i].length; t++) {
            // console.log(i, t, i * board.length + t);
            if (board[i][t] && (i * board.length + t !== n)) {
                if (+board[i][t] === +val) { // cовпадение по оси Х найдено!
                    setR(false);
                    break;
                }
            }
        }
    }
    const checkCol = () => {
        for (let t = 0; t < board.length; t++) {
            // console.log(+board[t][j], content);
            if (board[t][j] && (t * board.length + j !== n)) {
                if (+board[t][j] === +val) { // Совпадение по оси Y найдено!
                    setC(false);
                    break;
                }
            }
        }
    }
    useEffect(() => {
        if (val) {
            setBoard(prev => {
                let arr = [...prev];
                let cnt = arr.length;
                for (let i = 0; i < arr.length; i++) {
                    for (let j = 0; j < arr.length; j++) {
                        if (i * cnt + j === n) {
                            arr[i][j] = val;
                            break;
                        }
                    }
                }
                return arr;
            })
        }
    }, [val]);
    useEffect(() => {
        checkCol();
        checkRow();
    }, [board]);

    useEffect(() => {
        // console.log(r, c);
        setSt({
            color: r && c ? "springgreen" : "crimson"
        })
    }, [r, c]);

    const setStep = (e) => {
        // setVal(e.target.value);
        // setBoard(prev => {
        //     let arr = [...prev];
        //     let cnt = arr.length;
        //     for (let i = 0; i < arr.length; i++) {
        //         for (let j = 0; j < arr.length; j++) {
        //             if (i * cnt + j === n) {
        //                 arr[i][j] = e.target.value;
        //                 break;
        //             }
        //         }
        //     }
        //     return arr;
        // })
        setMActive(true);
    }
    return <div className={data[n] !== "-" ? "card inactive" : "card"} onClick={setStep}>
        {content ? 
            <span style={data[n] === "-" ? st : {}}>{content}</span> : <span></span>
            // <select onChange={setStep} value={content}>
            //     <option value={null}></option>
            //     <option>1</option>
            //     <option>2</option>
            //     <option>3</option>
            //     <option>4</option>
            //     <option>5</option>
            //     <option>6</option>
            //     <option>7</option>
            //     <option>8</option>
            //     <option>9</option>
            // </select>
            // <input type="number" value={val} min={1} max={9} onChange={setStep}/>
        }
        {data[n] === "-" && <Modal 
            setActive={setMActive} 
            setVal={setVal} 
            active={mActive}
        />}
        <span className="card-index">{n}</span>
    </div>
}