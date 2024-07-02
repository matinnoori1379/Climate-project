import { useEffect, useRef, useState } from "react";
import "./App.css";
import {fetchData} from "./fetchdata.js"
import { showdate } from "./showdata.js";

const App = () => {
  let refinput = useRef()
  let [input, setInput] = useState("");
  let [data , setData]=useState({
   
    name:"Northampton",
    sys:{country:"GB"},
    main:{temp:"273.15" , temp_min:"254" , temp_max:"295"},
    weather:[{main:"clouds"}]
  })


  const inputhandler =async (e) => {

    if (e.keyCode ===13) {
      refinput.current.value=""

      fetchData(input)
       .then((res)=>{setData(res)})
      

    } else {
      setInput(e.target.value);
    }

  };

  console.log("jalal")

  useEffect(()=>{
  console.log(data)

  },[data])

  return (
    <div className="app-wrap">
      <header>
        <input
          onKeyUp={inputhandler}
          type="text"
          autoComplete="off"
          className="search-box"
          placeholder="Search for a city..."
          ref={refinput}
        ></input>
      </header>
      <main>
        <section className="location">
          <div className="city">{data.name} , {data.sys.country}</div>
          <div className="date">{showdate()}</div>
        </section>
        <div className="current">
          <div className="temp">
            {Math.floor((data.main.temp)-273.15)}<span>°c</span>
          </div>
          <div className="weather">{data.weather[0].main}</div>
          <div className="hi-low">{Math.floor((data.main.temp_min)-273.15)}°c / {Math.floor((data.main.temp_max)-273.15)}°c</div>
        </div>
      </main>
    </div>
  );
};

export default App;




// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=71b5526c91d8a87649c639bbe2df06a5`)
// .then(res => res.json())
// .then(data => {
//     setData(data)

// })
