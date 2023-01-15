import React from "react";

const Ctx = React.createContext({
    data: "",
    board: [],
    setData: () => {},
    setBoard: () => {}
});

export default Ctx;