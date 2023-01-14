import React from "react";

const Ctx = React.createContext({
  date:"",  
  board: [],
  setBoard: () => {}, 
  setDate: () => {},  
});

export default Ctx;