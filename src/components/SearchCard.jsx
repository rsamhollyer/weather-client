import Moment from "react-moment";

function SearchCard(props) {
  // Props
  const { search } = props;
  const createdAtTime = search.created_at;

  return (
    <div className="search-card">
      <h4>City : {search.city}</h4>
      <h4>Temp : {search.temp}</h4>
      <h4>Humidity : {search.humidity}</h4>
      <h6>
        Saved On :{" "}
        <Moment format={"MM/DD/YYYY HH:MM:SS"} date={createdAtTime} />
      </h6>
    </div>
  );
}

export default SearchCard;
