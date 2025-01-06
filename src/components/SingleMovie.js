import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useSingleMovieTrailer from "../hooks/useSingleMovieTrailer";
import { useSelector } from "react-redux";
import SingleMovieDetails from "./SingleMovieDetails";
import Footer from "./Footer";
import MovieCredits from "./MovieCredits";

const SingleMovie = () => {
  const movie = useSelector((store) => store.movies.singleMovieVideo);

  const { movieId } = useParams();
  useSingleMovieTrailer(movieId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!movie) return;

  return (
    <div className="bg-black overflow-hidden pt-20 sm:pt-0">
      <div className="-mt-[90px]">
        <iframe
          className="w-screen aspect-video scale-150 sm:scale-100"
          // className="w-screen aspect-video scale-[3] sm:scale-125 lg:scale-110 h-[30rem] md:h-[35rem] lg:h-[42rem] xl:h-full"
          src={`https://www.youtube.com/embed/${movie.key}?&autoplay=1&mute=1&controls=0`}
          title="YouTube video player"
          allow="accelerometer; &autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
      <SingleMovieDetails />
      <MovieCredits id={movieId} />
      <Footer />
    </div>
  );
};

export default SingleMovie;
