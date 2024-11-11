import SearchBox from "./Searchbox.jsx";
import InfoBox from "./InfoBox";
import { useState } from "react";

import "./InfoBox.css";


export default function WeatherApp() {
    let [weatherInfo,setWeatherInfo]=useState({
        city: "Delhi",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.25,
        humidity: 47,
        weather: "haze",
      })
      let updateWeather=(result)=>{
        setWeatherInfo(result);
      }
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App by Mohsin</h2>
      <SearchBox update={updateWeather} />
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
