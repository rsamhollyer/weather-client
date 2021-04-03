function Weather(props) {
  // Props
  const { weather, saveSearch } = props;

  //Functions
  const saveHandler = (weather) => {
    const weatherObject = {
      city: weather.name,
      temp: weather.main.temp,
      humidity: weather.main.humidity,
    };

    saveSearch(weatherObject); // send to backend
  };

  return (
    <>
      {weather.name ? (
        <div className="weather-data">
          <h2>City Name : {weather.name}</h2>
          <h3>Current Temp : {weather.main.temp}</h3>
          <h3>Current Humidity : {weather.main.humidity}</h3>
          <button onClick={() => saveHandler(weather)}>Save</button>
        </div>
      ) : null}
    </>
  );
}

export default Weather;
