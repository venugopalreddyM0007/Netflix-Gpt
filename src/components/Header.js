import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import IMG from "../images/sign-out-logo.png";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import lang from "../utils/languageConstants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const gpt = useSelector((store) => store.gpt.showGptSearch);
  const langKey = useSelector((store) => store.config.lang);

  function signOutHandler() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  }

  function gptSearchBtnHandler() {
    dispatch(toggleGptSearchView());
  }

  useEffect(() => {
    // acts as a event listener [ fires when sign-in / sign-up / sign-out ]
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when components unmounts
    return () => unsubscribe;
  }, []);

  function handleLanguageChange(e) {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div
      className={`absolute top-0 pt-1 w-screen bg-gradient-to-b from-black flex ${
        user && "flex-col items-center"
      } sm:flex-row  justify-between sm:items-start px-4 sm:px-10 z-30 -mt-2 md:mt-0`}
    >
      <img className="w-24 sm:w-28 z-10 ml-10 mt-5" src={LOGO} alt="" />
      <div className="flex items-center -mt-2 sm:-mt-0">
        <select
          className="bg-slate-800 text-white focus:outline-none mt-5 mr-5 py-2 pl-3 rounded-[4px] font-semibold text-xs sm:text-sm tracking-wider hover:scale-105 duration-500 "
          onChange={handleLanguageChange}
        >
          {SUPPORTED_LANGUAGES.map((lang) => {
            return (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            );
          })}
        </select>
        {user && (
          <div className="flex">
            <button
              className="text-white mt-5 mr-5 tracking-wider font-semibold px-4 py-2 rounded-[4px] bg-purple-800 text-xs sm:text-sm hover:scale-105 duration-500"
              onClick={gptSearchBtnHandler}
            >
              {gpt ? lang[langKey].homepage : lang[langKey].gptSearch}
            </button>
            <div
              className="flex items-center mt-5 cursor-pointer group"
              onClick={signOutHandler}
            >
              <img
                src={IMG}
                className="h-6 w-6 object-cover inline-block pr-1 group-hover:scale-110 group-hover:duration-200"
                alt="user-img"
              />
              <p className="text-white text-xs sm:text-sm font-semibold inline-block">
                {lang[langKey].signout}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
