import React from "react";
import { Movie } from "./Movie";
import MovieData from "./MovieData.json";

export default function Data() {
  return (
    <div className="flex items-center justify-around flex-wrap mt-2">
      {MovieData.map((element, index) => {
        return (
          <Movie
            key={index}
            title={element.title}
            year={element.year}
            poster={element.poster_url}
          />
        );
      })}
    </div>
  );
}
