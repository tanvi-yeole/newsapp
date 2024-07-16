import React from "react";
import col from "./col.png";
// import charg from '../Images/charg.jpg'
import logo from "../Images/logo.jpg";
import {signInWithPopup} from "firebase/auth";
import {auth,googleProvider} from '../firebase/Setup'
function Signin() {
  const googleSignin = async() => {
    try{
          await signInWithPopup(auth, googleProvider)

    }catch(err){
      console.error(err)
    }
  }

  return (
    <div className="grid grid-cols-2 bg-black h-screen">
      <div>
        <img src={logo} className="ms-80 pt-36 w-36" />
        <h1 className="text-white text-3xl font-semibold text-center pt-10">
          sign in
        </h1>
        <button onClick={googleSignin} className="bg-blue-500 px-4 rounded hover:bg-slate-500 text-slate-800 font-bold ms-48 mt-14 h-12 w-96 ">
          Sign in
        </button>
        <h2 className="text-blue-500 underline text-center mt-5 ">sign in now</h2>
      </div>
      <div>
        <img src={col} alt="Img" /> 
      </div>
    </div>
  );
}
export default Signin;
