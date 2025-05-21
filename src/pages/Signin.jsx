import React from "react";
import {signInWithPopup} from "firebase/auth";
import {auth,googleProvider} from '../firebase/Setup'
function Signin() {
    const googleSignin = async () => {
      try {
        await signInWithPopup(auth, googleProvider).then(()=> {
          window.location.href = "/"
        })
      } catch (err) {
        console.error(err)
      }
  }

  return (
    <div className="grid grid-cols-2 bg-white h-screen">
      <div>
        <img src='/Images/logo.jpg' className="ms-80 pt-36 w-36" />
        <button onClick={googleSignin} className="bg-blue-500 px-4 rounded hover:bg-slate-500 text-slate-800 font-bold ms-48 mt-14 h-12 w-96 ">
          Sign in
        </button>
      </div>
      <div>
        <img className="rounded-s-full p-0 m-0" src='/Images/news.png' alt="Img" /> 
      </div>
    </div>
  );
}
export default Signin;
