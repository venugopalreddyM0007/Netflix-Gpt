import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const movieNo = Math.floor(Math.random() * 20);
  const mainMovie = movies[1];

  const { id, title, overview } = mainMovie;

  return (
    <div className="relative">
      <VideoTitle title={title} description={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
