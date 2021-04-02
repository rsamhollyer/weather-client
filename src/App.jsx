import { useState, useEffect } from "react";
import axios from "axios";
import CitySearch from "./components/CitySearch";
function App() {
  // State
  const [inputText, setInputText] = useState("");
  const [cityName, setCityName] = useState({});
  const [weather, setWeather] = useState({});

  //Axios

  const getWeather = async (str) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather`;
    try {
      const resp = await axios.get(URL, {
        params: { q: str, appid: process.env.REACT_APP_WEATHER_KEY },
      });
      console.log(resp.data);
      setWeather(resp.data);
    } catch (e) {
      alert(`City does not exist. Try again`);
    }
  };

  // UseEffect
  useEffect(() => {
    if (cityName.city) {
      getWeather(cityName.city);
    }
  }, [cityName]);

  return (
    <div className="App">
      <h1>WEATHER APP</h1>
      <CitySearch
        setCityName={setCityName}
        inputText={inputText}
        setInputText={setInputText}
      />
    </div>
  );
}

export default App;
