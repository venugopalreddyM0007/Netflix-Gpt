import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ id, posterPath }) => {
  return (
    <Link to={`${id}`}>
      <div className="w-24 sm:w-32 md:w-36 lg:w-40 2xl:w-56 hover:scale-110 duration-300 cursor-pointer">
        <img
          className="rounded-sm"
          src={IMG_CDN_URL + posterPath}
          alt="Movie Card"
        />
      </div>
    </Link>
  );
};

export default MovieCard;
