import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";



export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
       city: "Bangalore",
       feelLike: 17.23,
       temp: 17.26,
       tempMin: 15.9,
       tempMax: 17.84,
       humidity: 84,
       weather: "mist",
    });

    let updateInfo = (newInfo) =>{
       setWeatherInfo(newInfo);
    }

    return (
      <div style={{ textAlign: "center" }}>
        <h2>Weather Widget</h2>
        <SearchBox updateInfo = {updateInfo}/>
        <InfoBox info = {weatherInfo}/>
      </div>
    );
  }
  