import axios from "axios";
import { useState } from "react";


const ApiComponent = ()  =>{
    const [data, setData] = useState([]);

       const getData = async () =>{  
        const response = await axios.get("https://api.quotable.io/random");
        console.log(response)
        setData(response.data.content)
    }

    return(
        <>
                <button onClick={getData}>get quote</button>
        <p>{data}</p>
        </>
    )
}

export default ApiComponent