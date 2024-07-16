import React from "react";
import { auth } from "../firebase/Setup";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="w-full px-28 py-4 bg-sky-900 text-white transition-all duration-200">
      <div className="flex flex-col md:flex-row gap-3 justify-between items-center transition-all duration-200">
        <a className="text-2xl" href="/">
          Newser
        </a>
        <ul className="flex gap-5">
          <li className="after:bg-white after:w-0 hover:after:w-full after:h-[1px] after:transition-all after:duration-200 after:block cursor-pointer">
            Home
          </li>
          <li className="after:bg-white after:w-0 hover:after:w-full after:h-[1px] after:transition-all after:duration-200 after:block cursor-pointer">
            About
          </li>
          <li className="after:bg-white after:w-0 hover:after:w-full after:h-[1px] after:transition-all after:duration-200 after:block cursor-pointer">
            Contact
          </li>
          <li className="after:bg-white after:w-0 hover:after:w-full after:h-[1px] after:transition-all after:duration-200 after:block cursor-pointer">
            Music
          </li>
          <li className="after:bg-white after:w-0 hover:after:w-full after:h-[1px] after:transition-all after:duration-200 after:block cursor-pointer">
            News
          </li>
          <li className="after:bg-white after:w-0 hover:after:w-full after:h-[1px] after:transition-all after:duration-200 after:block cursor-pointer">
            Sport
        
          </li>
          <li className="after:bg-white after:w-0 hover:after:w-full after:h-[1px] after:transition-all after:duration-200 after:block cursor-pointer">
            Travel
          </li>
        </ul>
        <div>
          {auth.currentUser?
          <button className="px-4 py-2 bg-white rounded-md hover:opacity-60 text-black transition-all duration-200">
            Logout
          </button>
          :<Link to="/signin">
          <button className="px-4 py-2 bg-white rounded-md hover:opacity-60 text-black transition-all duration-200">
            Sign in
          </button>
          </Link>}
          <button className="px-4 py-2 ms-5 bg-white rounded-md hover:opacity-60 text-black transition-all duration-200">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
