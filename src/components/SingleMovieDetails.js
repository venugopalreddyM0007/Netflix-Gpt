import React from "react";
import { FaPlay, FaBackspace } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";

const SingleMovieDetails = () => {
  const { movieId } = useParams();
  const movieDetails = useSelector((store) => store.movies.movieDetails);
  useMovieDetails(movieId);

  if (!movieDetails) return;

  console.log(movieDetails);

  return (
    <div className="mt-24 sm:mt-10">
      <div>
        <Link to="/browse">
          <button className="absolute top-0 rounded-lg text-white text-2xl sm:text-4xl ml-5 mt-2 hover:scale-110 duration-300">
            <FaBackspace />
          </button>
        </Link>
        <div className="">
          <div className="flex flex-col md:flex-row-reverse justify-evenly items-center gap-10">
            <div className="flex justify-center items-center w-full md:w-2/3 md:ml-10">
              <div className="text-white px-8 pb-10 ">
                <h1 className="text-3xl md:text-4xl font-bold tracking-wider w-10/12 mb-1 sm:mb-4">
                  {movieDetails.title}
                </h1>
                <div className="mt-3 font-semibold ml-1">
                  <span>{movieDetails.release_date} </span>
                  <div className=" inline-block">
                    <span className="px-1 text-gray-300"> • </span>
                    <span>3 Languages</span>
                    <span className="px-1 text-gray-300"> • </span>
                  </div>
                  <span>{movieDetails.runtime} minutes</span>
                  <span className="px-1 text-gray-300">•</span>
                  <span>U/A 13+</span>
                </div>
                <p className="mt-3 w-10/12 text-sm m-1">
                  {movieDetails.overview}
                </p>
                <ul className="mt-3 list-disc ml-1 font-semibold text-sm md:text-base">
                  {movieDetails.genres.map((genre, index) => (
                    <li className="inline-block pr-3" key={genre.id}>
                      <span>{genre.name} </span>
                      {movieDetails.genres.length !== index + 1 && (
                        <span className="ml-2">|</span>
                      )}
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 list-disc ml-1 font-semibold">
                  <li className="inline-block pr-3 bg-black px-4 text-sm bg-opacity-30 cursor-pointer py-2 rounded-2xl hover:opacity-80 duration-200 tracking-wider mr-2">
                    English
                  </li>
                  <li className="inline-block pr-3 bg-black px-4 text-sm bg-opacity-30 cursor-pointer py-2 rounded-2xl hover:opacity-80 duration-200 tracking-wider mr-2">
                    Hindi
                  </li>
                  <li className="inline-block pr-3 bg-black px-4 text-sm bg-opacity-30 cursor-pointer py-2 rounded-2xl hover:opacity-80 duration-200 tracking-wider">
                    Spanish
                  </li>
                </ul>

                <div className="mt-6">
                  <button className="bg-white hover:scale-105 duration-500 text-black font-bold md:text-xl px-8 md:px-16 py-[5px] md:py-[10px] rounded-md tracking-wider">
                    <FaPlay className="inline-block text-xl mb-1 mr-1" />
                    <span> Subscribe to Watch</span>
                  </button>
                  <button className="md:text-2xl font-bold bg-black px-3 md:px-5  pb-2 md:pb-3  pt-1 md:pt-2 rounded-md bg-opacity-40 ml-3 hover:bg-white hover:bg-opacity-15 duration-200">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="w-10/12 md:w-1/3 md:ml-10 rounded-md overflow-hidden">
              <img src={IMG_CDN_URL + movieDetails.poster_path} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovieDetails;
