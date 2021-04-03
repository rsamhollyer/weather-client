import { useState } from "react";

function CitySearch(props) {
  const [inputText, setInputText] = useState("");

  const { getWeather } = props;

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    getWeather(inputText);
  };

  return (
    <form onSubmit={formSubmitHandler} className="search-form">
      <input
        onChange={inputTextHandler}
        type="text"
        name="city-search"
        id="city-search"
        placeholder="City Name"
        value={inputText}
      />
      <input type="submit" value="Search" />
    </form>
  );
}

export default CitySearch;
