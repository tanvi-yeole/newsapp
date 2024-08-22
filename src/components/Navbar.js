import React from "react";
import { auth } from "../firebase/Setup";
import { Link } from "react-router-dom";
import { navLinks } from "../data/index";
const Navbar = () => {
  return (
    <nav className="w-full px-28 py-4 bg-sky-900 text-white transition-all duration-200">
      <div className="flex flex-col md:flex-row gap-3 justify-between items-center transition-all duration-200">
        <Link className="text-2xl" to="/">
          Newser
        </Link>
        <ul className="flex gap-5">
          {navLinks.map((link) => {
            return (
              <li className="after:bg-white after:w-0 hover:after:w-full after:h-[1px] after:transition-all after:duration-200 after:block cursor-pointer">
                <Link to={link.href}>{link.label}</Link>
              </li>
            );
          })}
        </ul>
        <div>
          {auth.currentUser ? (
            <button className="px-4 py-2 bg-white rounded-md hover:opacity-60 text-black transition-all duration-200">
              Logout
            </button>
          ) : (
            <Link to="/signin">
              <button className="px-4 py-2 bg-white rounded-md hover:opacity-60 text-black transition-all duration-200">
                Sign in
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
