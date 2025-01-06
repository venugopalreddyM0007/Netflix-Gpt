import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import run from "../utils/openai";
import { addAiGeneratedMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();

  const inputRef = useRef(null);

  async function formHandler(e) {
    e.preventDefault();

    const data = await run(
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
        inputRef.current.value +
        ". Only give me names of movies, comma separated like the example ahead. Example Result: Don , Bahubali, venky, luckybhaskar,keeda cola"
    );

    const moviesAiGenerated = data.split(",");
    dispatch(addAiGeneratedMovies(moviesAiGenerated));
  }

  return (
    <div className="absolute flex items-center justify-center w-screen top-32 sm:top-28">
      <form
        onSubmit={formHandler}
        className="flex flex-col gap-3 p-4 bg-black rounded-md sm:flex-row bg-opacity-70"
      >
        <input
          ref={inputRef}
          type="text"
          className="border-2 w-[320px] sm:w-[400px] px-6 py-2 rounded-sm text-black focus:outline-none"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="px-8 py-2 font-semibold tracking-wide duration-300 bg-red-600 selection:border-none hover:bg-opacity-80 active:scale-95">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
