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
        ". Only give me names of movies, comma separated like the example ahead. Example Result: Gadar, Sholay, Don, Golmaal"
    );

    const moviesAiGenerated = data.split(",");
    dispatch(addAiGeneratedMovies(moviesAiGenerated));
  }

  return (
    <div className="flex justify-center items-center w-screen absolute top-32 sm:top-28">
      <form
        onSubmit={formHandler}
        className="flex sm:flex-row flex-col gap-3 bg-black p-4 rounded-md bg-opacity-70"
      >
        <input
          ref={inputRef}
          type="text"
          className="border-2 w-[320px] sm:w-[400px] px-6 py-2 rounded-sm text-black focus:outline-none"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="bg-red-600 px-8 py-2 selection:border-none font-semibold tracking-wide hover:bg-opacity-80 duration-300 active:scale-95">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
