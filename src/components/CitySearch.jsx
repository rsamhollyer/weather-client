function CitySearch(props) {
  // Props
  const { setCityName, cityName } = props;

  // Handlers
  const cityNameFormHandler = (e) => {
    setCityName(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setCityName("");
      }}
      className="search-form"
    >
      <input
        onChange={cityNameFormHandler}
        type="text"
        name="city-search"
        id="city-search"
        placeholder="City Name"
        value={cityName}
      />
      <input type="submit" value="Search" />
    </form>
  );
}

export default CitySearch;
