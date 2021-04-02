function SearchCard(props) {
  // Props
  const { search } = props;

  return (
    <div className="search-card">
      <h4>City : {search.city}</h4>
      <h4>Temp : {search.temp}</h4>
      <h4>Humidity : {search.humidity}</h4>
      <h6>Saved At : {search.time}</h6>
    </div>
  );
}

export default SearchCard;
