import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    const handleClick = (index) => {
        if (state[index] !== null) {
            return;
        }
        const copyState = [...state];
        copyState[index] = isXTurn ? 'X' : '0';
        setState(copyState);
        setIsXTurn(!isXTurn);
    }

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]];
        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return `${state[a]}  Won the Game`;
            }
            if (!state.some((e) => e === null)) {
                // document.write(`Draw!!`);
                return 'Draw !!';
            }
        }
        return false;


    }
    const handleReset = () => {
        setState(Array(9).fill(null));
    }
    const isWinner = checkWinner();
    return (
        <div className="board-container ">
            {isWinner ? <><h1 className="text-5xl text-center">{isWinner}  </h1> <div className="  flex justify-center items-center  m-14"><button type="button" className=" text-white bg-green-600  px-4 py-2 rounded " onClick={handleReset}>Play Again</button></div></> : <>
                <h4 className="text-center m-2">Player {isXTurn ? 'X' : '0'} Please move</h4>
                <div className="board-row">
                    <Square onClick={() => handleClick(0)} value={state[0]} />
                    <Square onClick={() => handleClick(1)} value={state[1]} />
                    <Square onClick={() => handleClick(2)} value={state[2]} />
                </div>
                <div className="board-row">
                    <Square onClick={() => handleClick(3)} value={state[3]} />
                    <Square onClick={() => handleClick(4)} value={state[4]} />
                    <Square onClick={() => handleClick(5)} value={state[5]} />
                </div>
                <div className="board-row">
                    <Square onClick={() => handleClick(6)} value={state[6]} />
                    <Square onClick={() => handleClick(7)} value={state[7]} />
                    <Square onClick={() => handleClick(8)} value={state[8]} />
                </div></>
            }

        </div>
    )

}

export default Board