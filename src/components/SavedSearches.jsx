import SearchCard from "./SearchCard";

function SavedSearches(props) {
  // Props
  const { savedSearches } = props;

  return (
    <div className="previous-searches">
      <h3>Prior Search History</h3>
      {savedSearches.length > 0
        ? savedSearches.map((search) => {
            return <SearchCard search={search} key={search.id} />;
          })
        : null}
    </div>
  );
}

export default SavedSearches;
