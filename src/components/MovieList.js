import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-lg sm:text-2xl font-semibold py-4">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex gap-x-2 sm:gap-x-4">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              posterPath={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
