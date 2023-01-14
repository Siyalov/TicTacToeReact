import React, {useState} from "react";
export default ({setVal, setActive, active}) => {
  const numbers = [1,2,3,4,5,6,7,8,9, ""];
  const selectNum = e => {
    e.stopPropagation();
    setVal(e.target.innerText);
    setActive(false)
    }
  return <div className="modal" style={{display: active ? "grid" : "none"}}>
    {numbers.map(n => <div className="num" onClick={selectNum} key={n}>{n}</div>)}
   </div>
}