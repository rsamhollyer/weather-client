function Weather(props) {
  // Props
  const { weather, savedSearches, setSavedSearches } = props;

  return (
    <>
      {weather.name ? (
        <div className="weather-data">
          <h2>City Name : {weather.name}</h2>
          <h3>Current Temp : {weather.main.temp}</h3>
          <h3>Current Humidity : {weather.main.humidity}</h3>
        </div>
      ) : null}
    </>
  );
}

export default Weather;
