import "./App.css";
// import axios from 'axios';
import React from "react";
// import { useState } from "react";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/footer/footer";
// import ApiComponent from "./Api";
import ApiComponent2 from "./API2";

import {Route,Routes} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import About from "./pages/About";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ApiComponent2 />
        {/* <ApiComponent/> */}
        <Navbar />
      </header>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/About' element={<About/>}/>

        {/* <Route path='*' element={<NotFound/>}/> */}
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
