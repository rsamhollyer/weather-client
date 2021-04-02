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

    const resp = await axios.get(URL, {
      params: {
        q: str,
        units: "imperial",
      },
    });
    if (resp.data.name === "Error") {
      alert("Something went wrong");
    } else {
      setWeather(resp.data);
    }
    console.log(resp.data.name);
    console.log(resp.status);

    // alert(`City does not exist. Try again`);
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
