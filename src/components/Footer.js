import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaGlobe } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex px-2 flex-col items-center bg-black text-gray-400 pb-4 pt-10">
      <h4 className=" mb-8 cursor-pointer hover:text-gray-200">
        Questions? Contact us.
      </h4>
      <div className="flex flex-wrap justify-center gap-x-20 text-sm">
        <ul className="flex flex-col justify-center items-center my-4">
          <li className="mb-4 cursor-pointer hover:text-gray-200">FAQ</li>
          <li className="mb-4 cursor-pointer hover:text-gray-200">
            Media Center
          </li>
          <li className="mb-4 cursor-pointer hover:text-gray-200">
            Buy Gift Cards
          </li>
          <li className="mb-4 cursor-pointer hover:text-gray-200">
            Cookie Preferences
          </li>
          <li className="mb-4 cursor-pointer hover:text-gray-200">
            Legal Notices
          </li>
        </ul>
        <ul className="flex flex-col justify-center items-center my-4">
          <li className="mb-4 cursor-pointer hover:text-gray-200">
            Gift Card Terms
          </li>
          <li className="mb-4 cursor-pointer hover:text-gray-200">
            Investor Relations
          </li>
          <li className="mb-4 cursor-pointer hover:text-gray-200">
            Ways to Watch
          </li>
          <li className="mb-4 cursor-pointer hover:text-gray-200">
            Corporate Information
          </li>
          <li className="mb-4 cursor-pointer hover:text-gray-200">
            Only on Netflix
          </li>
        </ul>
        <ul className="flex flex-col justify-center items-center my-4">
          <li className="mb-4 cursor-pointer hover:text-gray-200">
            Help Center
          </li>
          <li className="mb-4 cursor-pointer hover:text-gray-200">Jobs</li>
          <li className="mb-4 cursor-pointer hover:text-gray-200">
            Terms of Use
          </li>
          <li className="mb-4 cursor-pointer hover:text-gray-200">
            Contact Us
          </li>
        </ul>
        <ul className="flex flex-col justify-center items-center my-4">
          <li className="mb-4 cursor-pointer hover:text-gray-200">Account</li>
          <li className="mb-4 cursor-pointer hover:text-gray-200">
            Redeem Gift Cards
          </li>
          <li className="mb-4 cursor-pointer hover:text-gray-200">Privacy</li>
          <li className="mb-4 cursor-pointer hover:text-gray-200">
            Speed Test
          </li>
        </ul>
      </div>
      <button className="flex items-center gap-x-2 border-[0.5px] border-gray-400 text-sm px-3 py-2 mt-3">
        <FaGlobe />
        <span className="ml-2">English</span>
        <IoMdArrowDropdown className="-mt-1" />
      </button>
    </div>
  );
};

export default Footer;
