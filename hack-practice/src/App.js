import "./App.css";
// import axios from 'axios';
import React from "react";
// import { useState } from "react";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/footer/footer";
import ApiComponent from "./Api";
import ApiComponent2 from "./API2";




function App() {
  

  return (
    <div className="App">
      <header className="App-header">
       
      <ApiComponent2/>
      {/* <ApiComponent/> */}
        <Footer></Footer>



        <Navbar/>
        <p>Test</p>
        <p>Test2</p>
        <p>Test3</p>
        <p>Test4</p>
        <p></p>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
