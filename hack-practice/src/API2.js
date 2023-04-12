// import axios from "axios";
import { useState } from "react";

const ApiComponent2 = ()  =>{
  const [search, setSearch] = useState("");
  const [weatherName, setWeatherName] = useState(null);
  const [weatherDescription, setWeatherDescription] = useState(null);
    
    const api = {
        key: "1e2224cdfa86a62cb633695ce9cf2158", //api.key
        base: "https://api.openweathermap.org/data/2.5/", //api.base
      };


    // console.log(search)
    const searchPressed = () => {
        fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
          .then((res) => res.json())
          .then((result) => {
            console.log(result)
            // console.log(result.weather)
            // console.log(result.name)
            setWeatherName(result.name);
            setWeatherDescription(result.weather['0'].description);
            
          });
      };
    return(
        <>

        <input type="text" placeholder="Enter city" onChange={(e) => setSearch(e.target.value)}/>

        <button onClick={searchPressed}>weather</button>
            <p>{weatherName}</p>
            <p>{weatherDescription}</p>
        <div>
        </div>

        </>
    )
}

export default ApiComponent2