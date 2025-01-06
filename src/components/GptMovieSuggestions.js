import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_OPTIONS, IMG_CDN_URL } from "../utils/constants";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const GptMovieSuggestions = () => {
  const gptMovies = useSelector((store) => store.gpt.aiGeneratedMovies);
  const [tmdbMovies, setTmdbMovies] = useState([]);

  async function fetchMovies(movieName) {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const jsonData = await data.json();
    return jsonData;
  }

  async function tmdbData() {
    if (gptMovies) {
      const promiseArray = gptMovies.map((movie) => fetchMovies(movie));
      const tmdbResults = await Promise.all(promiseArray);
      setTmdbMovies(tmdbResults);
    }
  }

  useEffect(() => {
    tmdbData();
  }, [gptMovies]);

  return (
    <div className="absolute top-80 lg:top-72 w-screen flex items-center overflow-x-scroll no-scrollbar">
      <div className="flex gap-3 justify-center px-10">
        {tmdbMovies.map((item, index) => {
          if (item.results.length === 0) return null;
          return (
            <Link to={`${item.results[0].id}`} key={index}>
              <div className="w-36 md:w-44 lg:w-52 2xl:w-56 flex flex-col gap-y-3 items-start p-3 hover:scale-105 duration-300 cursor-pointer bg-black/80 rounded-sm">
                <img
                  className="w-full"
                  src={IMG_CDN_URL + item.results[0]?.poster_path}
                  alt="Movie Card"
                />

                <p className="text-xs md:text-sm lg:text-base">
                  {item.results[0]?.title}
                </p>
                <div className="text-red-600 border-[1px] border-red-600 px-2 rounded-sm flex items-center text-xs md:text-sm lg:text-base justify-center gap-x-1 select-none">
                  <FaPlay />
                  <span>WATCH NOW</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
