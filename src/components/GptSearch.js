import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="pb-40 bg-black text-white">
      <img
        className="brightness-70 w-screen h-[120vh] object-cover"
        src={BG_URL}
        alt="background-img"
      />
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
