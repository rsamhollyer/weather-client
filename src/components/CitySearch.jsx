function CitySearch(props) {
  // Props
  const { setCityName, inputText, setInputText } = props;

  // Handlers
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setCityName({ city: inputText });
    setInputText("");
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
