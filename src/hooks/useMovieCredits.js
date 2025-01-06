import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieCredits } from "../utils/moviesSlice";

const useMovieCredits = (movieId) => {
  const dispatch = useDispatch();

  const getMovieCredits = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addMovieCredits(json));
  };

  useEffect(() => {
    getMovieCredits();
  }, []);
};

export default useMovieCredits;
