import { useContext } from "react";
import Ctx from "./Ctx";
import Card from "./Card";

export default function Board() {
  const { board } = useContext(Ctx);
  return (
    <div className="board">
      {board.map((el, i) => (
        <Card
          className="card"
          index={i}
          key={i}
          char={el}
        />
      ))}
    </div>
  );
};