import React from "react";

export const Movie = (props) => {
  return (
    <div>
        <div>
            <div className="border w-1/5 shadow-2xl m-5 rounded-md h-full">
                <img className="w-full h-72" src={props.Poster} alt={props.Title}/>
                <div className="p-2">
                    <p>{props.Year}</p>
                    <h1 className="font-bold text-2xl">{props.Title}</h1>
                </div> 
            </div>
        </div>
    </div>
  );
};
