import React from "react";

const Square = (props) => {

    return (
        <div
            onClick={props.onClick}
            className="square bg-slate-50 flex w-full items-center justify-center"
            style={{
                border: '1px solid',
                height: '100px'
            }}>
            <h5 className="text-5xl">{props.value}</h5>
        </div >
    )
}

export default Square;