import React from "react";
import { FaPlay } from "react-icons/fa";
import { LuInfo } from "react-icons/lu";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import lang from "../utils/languageConstants";

const VideoTitle = ({ title, description }) => {
  const trailer = useSelector((store) => store.movies.trailerVideo);
  const langKey = useSelector((store) => store.config.lang);

  if (!trailer) return;
  return (
    <div className="w-screen absolute aspect-video pt-48 md:pt-64 lg:pt-72  pl-10 sm:pl-16 text-white z-10">
      <h1 className="font-bold text-3xl tracking-wide">
        {lang[langKey].movieTitle}
        {/* {title} */}
      </h1>
      <p className="w-4/5 sm:w-2/5 mt-4 text-sm lg:text-base">
        {lang[langKey].movieDescription}
        {/* {description} */}
      </p>
      <div className="mt-6 flex">
        <Link to={`${trailer.trailerId}`}>
          <button className="bg-white text-black hover:bg-opacity-80 font-semibold px-10 py-2 rounded-md md:rounded-lg text-sm lg:text-base">
            <FaPlay className="inline-block text-base lg:text-xl mb-1 mr-1" />
            <span>{lang[langKey].play}</span>
          </button>
        </Link>
        <button className="bg-gray-700 hover:bg-opacity-80 text-white font-semibold px-6 py-2 rounded-md md:rounded-lg text-sm lg:text-base ml-3">
          <LuInfo className="inline-block text-base lg:text-xl mb-1 mr-1" />
          <span>{lang[langKey].moreInfo}</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
