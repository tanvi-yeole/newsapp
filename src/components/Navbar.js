import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../data/index";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase/Setup.js'

const Navbar = () => {
  const [uid, setUid] = useState(null);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUid(user.uid);
      console.log("User is signed in:", uid);
    } else {
      console.log("User is signed out");
    }
  });

  const handleLogout = () => {
    signOut(auth).then(() => {
      console.log("User signed out");
      setUid(null);
    }).catch((error) => {
      console.error("Error signing out:", error);
    });
  }

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
          {uid ? (
            <button className="px-4 py-2 bg-white rounded-md hover:opacity-60 text-black transition-all duration-200" onClick={handleLogout}>
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