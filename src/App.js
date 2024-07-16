import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newsitem from './components/NewsItem';
import Signin from './components/Signin';
import News from './components/News';
import Main from './components/Main';
import { Route, Routes} from "react-router-dom"
export default function App(){
    return (
      <>
        <Navbar/>
        <Routes>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/" element={<Main/>}/>
        </Routes>
        {/* <Signin/> */}
        <Newsitem/>
        <News/>
      </>
    )
  }

