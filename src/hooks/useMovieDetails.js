import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieDetails } from "../utils/moviesSlice";

const useMovieDetails = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addMovieDetails(json));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieDetails;
