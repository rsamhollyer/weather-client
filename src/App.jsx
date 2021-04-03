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
  const [savedSearches, setSavedSearches] = useState([]);
  console.log(savedSearches);
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

  const getSearches = async () => {
    const URL = `/api/weather/saved`;

    try {
      const resp = await axios.get(URL);
      setSavedSearches([...resp.data]);
    } catch (err) {
      alert("Something went wrong");
    }
  };

  // UseEffect
  useEffect(() => {
    getSearches();
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
