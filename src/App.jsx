import { useState, useEffect } from "react";
import axios from "axios";
import CitySearch from "./components/CitySearch";
import Weather from "./components/Weather";
import SavedSearches from "./components/SavedSearches";

function App() {
  // State
  const [inputText, setInputText] = useState("");
  const [cityName, setCityName] = useState({});
  const [weather, setWeather] = useState({});
  const [savedSearches, setSavedSearches] = useState([
    { id: 1, city: "Dallas", temp: 55.12, humidity: 23, time: "12:05" },
    { id: 2, city: "Pheonix", temp: 95.12, humidity: 13, time: "12:15" },
    { id: 3, city: "San Francisco", temp: 45.12, humidity: 23, time: "01:25" },
    { id: 4, city: "New York", temp: 25.12, humidity: 33, time: "2:55" },
  ]);

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
    } catch (err) {
      alert("Something went wrong");
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
      <Weather
        weather={weather}
        savedSearches={savedSearches}
        setSavedSearches={setSavedSearches}
      />
      <SavedSearches savedSearches={savedSearches} />
    </div>
  );
}

export default App;
