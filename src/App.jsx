import { useState, useEffect } from "react";
import axios from "axios";
import CitySearch from "./components/CitySearch";
import Weather from "./components/Weather";

function App() {
  // State
  const [inputText, setInputText] = useState("");
  const [cityName, setCityName] = useState({});
  const [weather, setWeather] = useState({});
  const [savedSearches, setSavedSearches] = useState([]);

  //Axios

  const getWeather = async (str) => {
    const URL = `/api/weather`;
    try {
      const resp = await axios.get(URL, {
        params: {
          q: str,
          units: "imperial",
        },
      });
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
      <Weather weather={weather} />
    </div>
  );
}

export default App;
