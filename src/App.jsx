import { useState } from "react";
import axios from "axios";
import CitySearch from "./components/CitySearch";
import Weather from "./components/Weather";
import SavedSearches from "./components/SavedSearches";
import "./styles/app.scss";

function App() {
  const [weather, setWeather] = useState({});
  const [savedSearches, setSavedSearches] = useState([]);

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
      alert("Something went wrong with getWeather", err);
    }
  };

  const getSearches = async () => {
    const URL = `/api/weather/saved`;
    try {
      const resp = await axios.get(URL);
      setSavedSearches([...resp.data]);
    } catch (err) {
      alert("Something went wrong getSearches", err);
    }
  };

  const saveSearch = async (weatherObject) => {
    const URL = `/api/weather/save`;
    try {
      const resp = await axios.post(URL, weatherObject);
      getSearches();
      return resp;
    } catch (err) {
      alert("Something went wrong saveSearch", err);
    }
  };

  const deleteSearch = async (weatherId) => {
    const URL = `/api/weather/delete/${weatherId}`;
    try {
      const resp = await axios.delete(URL, { data: { weatherId } });
      getSearches();
    } catch (err) {
      alert(`Something went wrong deleteSearch : ${err}`);
    }
  };

  return (
    <div className="App">
      <h1>WEATHER APP</h1>
      <CitySearch getWeather={getWeather} />

      <Weather
        weather={weather}
        savedSearches={savedSearches}
        setSavedSearches={setSavedSearches}
        saveSearch={saveSearch}
      />

      <SavedSearches
        deleteSearch={deleteSearch}
        savedSearches={savedSearches}
        setSavedSearches={setSavedSearches}
        getSearches={getSearches}
      />
    </div>
  );
}

export default App;
