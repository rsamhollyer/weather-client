import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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
    <div className="col mt-4">
      <h2 className="fw-bold fs-5">Search for a City</h2>

      <form onSubmit={formSubmitHandler} className="search-form">
        <div className="input-group">
          <input
            className="form-control"
            onChange={inputTextHandler}
            type="text"
            name="city-search"
            id="city-search"
            placeholder="City Name"
            value={inputText}
          />

          <button type="submit" className="btn btn-primary">
            <FontAwesomeIcon size="1x" icon={faSearch} /> Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default CitySearch;
