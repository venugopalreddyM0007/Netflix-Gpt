import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const langKey = useSelector((store) => store.config.lang);

  if (!movies.nowPlayingMovies) return;
  if (!movies.popularMovies) return;
  if (!movies.upcomingMovies) return;
  if (!movies.topRatedMovies) return;

  return (
    <div className="sm:-mt-5 md:-mt-8 lg:-mt-14 bg-black text-white pb-10">
      <div className="relative z-20 bg-transparent">
        <MovieList
          title={lang[langKey].trending}
          movies={movies.topRatedMovies}
        />
        <MovieList
          title={lang[langKey].nowPlaying}
          movies={movies.nowPlayingMovies}
        />
        <MovieList
          title={lang[langKey].popular}
          movies={movies.popularMovies}
        />
        <MovieList
          title={lang[langKey].upcomingMovies}
          movies={movies.upcomingMovies}
        />
        <MovieList
          title={lang[langKey].horror}
          movies={movies.nowPlayingMovies}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
