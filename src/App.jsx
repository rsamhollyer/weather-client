import { useState } from "react";
import axios from "axios";
import CitySearch from "./components/CitySearch";

function App() {
  // State
  const [cityName, setCityName] = useState("");
  return (
    <div className="App">
      <h1>WEATHER APP</h1>
      <CitySearch cityName={cityName} setCityName={setCityName} />
    </div>
  );
}

export default App;
