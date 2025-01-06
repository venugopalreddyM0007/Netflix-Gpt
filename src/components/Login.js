import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL } from "../utils/constants";
import lang from "../utils/languageConstants";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Login = () => {
  const [signInForm, setSignInForm] = useState(false);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  function toggleSignInForm() {
    setSignInForm(!signInForm);
  }

  function buttonHandler() {
    const message = checkValidation(
      email.current.value,
      password.current.value
    );
    setError(message);

    if (message) return;

    // Sign In / Sign Up Form
    if (!signInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // add displayName & profile picture
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
            })
            .catch((error) => {
              setError(error.message);
              console.log(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " " + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " " + errorMessage);
        });
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      {/* Background Image */}
      <img
        className="brightness-50 w-screen h-screen object-cover"
        src={BG_URL}
        alt="background-img"
      />
      {/* Form section */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-10/12 sm:w-96 lg:w-[26rem] top-24 sm:top-20 bg-black  p-5 sm:p-10 sm:py-15  bg-black/60 rounded-md text-white"
      >
        <h2 className="font-bold text-3xl m-2 mb-7">
          {signInForm ? lang[langKey].signin : lang[langKey].signup}
        </h2>
        {!signInForm && (
          <input
            ref={name}
            type="text"
            placeholder={lang[langKey].fullName}
            className=" p-3 m-2 my-5 block w-full mb-6 bg-black border-[0.5px] border-white rounded-md"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder={lang[langKey].emailOrMobileNumber}
          className=" p-3 m-2 my-5 block w-full mb-6 bg-black border-[0.5px] border-white rounded-md"
        />
        <div className="relative w-full">
          <input
            ref={password}
            type={showPassword ? "text" : "password"}
            placeholder={lang[langKey].password}
            className="p-3 m-2 block w-full mb-6 bg-black border-[0.5px] border-white rounded-md"
          />
          <span
            className="absolute right-2 top-3 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <IoEyeOff className="text-2xl" />
            ) : (
              <IoEye className="text-2xl" />
            )}
          </span>
        </div>
        <p className="text-red-500 font-semibold">{error}</p>
        <button
          onClick={buttonHandler}
          className="p-2 m-2 block w-full bg-[#E50F14] hover:bg-[#d21f22] duration-200 font-bold rounded-md tracking-wider"
        >
          {signInForm ? lang[langKey].signin : lang[langKey].signup}
        </button>
        <p
          className="py-4 mt-6 cursor-pointer text-gray-200 hover:text-gray-300 duration-200"
          onClick={toggleSignInForm}
        >
          {signInForm
            ? lang[langKey].newToNetflix
            : lang[langKey].alreadyRegistered}
        </p>
      </form>
    </div>
  );
};

export default Login;
