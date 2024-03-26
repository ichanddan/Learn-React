import React from "react";

export const Movie = (props) => {
  document.title = "Movie";
  return (
    <div className="w-3/12 h-3/12 border h-3/4 shadow-2xl m-2">
      <img className="w-full h-48" src={props.poster} alt={props.title} />
      <div className="p-2">
        <p>{props.year}</p>
        <h1 className="font-bold text-xs">{props.title}</h1>
      </div>
    </div>
  );
};
