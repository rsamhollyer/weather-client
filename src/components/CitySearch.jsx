function CitySearch(props) {
  // Props
  const { setCityName, inputText, setInputText } = props;

  // Handlers
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setCityName({ city: inputText });
    setInputText("");
  };

  return (
    <form className="search-form">
      <input
        onChange={inputTextHandler}
        type="text"
        name="city-search"
        id="city-search"
        placeholder="City Name"
        value={inputText}
      />
      <input onClick={formSubmitHandler} type="submit" value="Search" />
    </form>
  );
}

export default CitySearch;
