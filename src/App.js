import React from "react";
import Board from "./Component/Board";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-7xl text-center text-blue-400">Tic-Tac-Toe</h1>
      <div className="App">
        <Board />
      </div>
    </>
  );
}

export default App;
