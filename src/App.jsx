import { useState } from "react";
import axios from "axios";
import CitySearch from "./components/CitySearch";

function App() {
  // State
  const [inputText, setInputText] = useState("");
  const [cityName, setCityName] = useState({});
  const [weather, setWeather] = useState({});

  //Axios

  const getWeather = async (obj) => {
    const URL = `api.openweathermap.org/data/2.5/weather?`;
    const data = await axios.get(URL, {
      params: { q: cityName, appid: "6a52720ab8e519a37c28b8c621021acf" },
    });
    setWeather(data.data);
  };

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
