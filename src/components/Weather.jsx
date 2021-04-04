import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

function Weather(props) {
  const { weather, saveSearch } = props;

  const saveHandler = (weather) => {
    const weatherObject = {
      city: weather.name,
      temp: weather.main.temp,
      humidity: weather.main.humidity,
    };

    saveSearch(weatherObject); // send to backend
  };

  return (
    <div className="col mt-4">
      <h2 className="fw-bold fs-5">Current Weather</h2>
      <div className="card">
        {weather.name ? (
          <div className="weather-data p-3 text-center">
            <h2>{weather.name}</h2>
            <h3>{weather.main.temp}&deg;F</h3>
            <h3>Humidity : {weather.main.humidity}%</h3>
            <button
              className="btn btn-primary"
              onClick={() => saveHandler(weather)}
            >
              <FontAwesomeIcon size="1x" icon={faSave} /> Save
            </button>
          </div>
        ) : (
          <h3 className="text-center p-3 fs-5 text-muted">
            Search for a city to view current conditions
          </h3>
        )}
      </div>
    </div>
  );
}

export default Weather;
