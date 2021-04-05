import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
function SearchCard(props) {
  const { search, deleteSearch } = props;
  const createdAtTime = search.created_at;

  return (
    <div className="col-xs-12 col-sm-6 col-md-4">
      <div className="card mb-3 p-3">
        <div className="d-flex justify-content-between">
          <h4> {search.city}</h4>
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              deleteSearch(search.id);
            }}
          >
            <FontAwesomeIcon icon={faTrashAlt} size="1x" />
          </button>
        </div>
        <h4> {search.temp}&deg;F</h4>
        <h4>Humidity : {search.humidity}%</h4>
        <h6>
          <Moment format={"MM/DD/YYYY hh:mm:ss"} date={createdAtTime} />
        </h6>
      </div>
    </div>
  );
}

export default SearchCard;
