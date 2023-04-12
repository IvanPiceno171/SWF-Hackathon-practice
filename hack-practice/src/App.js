import "./App.css";
// import axios from 'axios';
import React from "react";
// import { useState } from "react";
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



      </header>
    </div>
  );
}

export default App;
