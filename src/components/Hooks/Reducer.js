import React, { useReducer } from "react";
const reducer = (state, action) => {
  if (action.type==="INC") {
    return state+1
  }else if (action.type==="DEC") {
    return state-1
  }else if (action.type==="MLT") {
    return state*2
  }
  return state
};

export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="text-4xl mt-2">Learn useReducer</h1>
      </div>
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-4xl mt-2">{state}</h1>
        <button className="p-2 border mt-2 bg-black text-white hover:bg-slate-500 "

          onClick={() => {dispatch({type:"INC"});}}
        >
          increment
        </button>
        <button className="p-2 border mt-2 bg-black text-white hover:bg-slate-500 "
        onClick={() => {dispatch({type:"DEC"});}}>Decrement</button>
        <button className="p-2 border mt-2 bg-black text-white hover:bg-slate-500 "
        onClick={() => {dispatch({type:"MLT"});}}>Multiply</button>
      </div>
    </>
  );
}
