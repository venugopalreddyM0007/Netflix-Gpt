import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerId = useSelector((store) => store.movies?.trailerVideo?.key);

  useMovieTrailer(movieId);

  return (
    <div className="sm:pt-12 sm:-mt-28 w-full overflow-hidden">
      <iframe
        className="w-screen aspect-video scale-[3] sm:scale-125 lg:scale-110 h-[30rem] md:h-[35rem] lg:h-[42rem] xl:h-full"
        src={`https://www.youtube.com/embed/${trailerId}?&autoplay=1&loop=1&mute=1&controls=0`}
        title="YouTube video player"
        allow="accelerometer; &autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
