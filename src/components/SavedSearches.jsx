import SearchCard from "./SearchCard";
import { useEffect } from "react";
function SavedSearches(props) {
  // Props
  const { savedSearches, deleteSearch, getSearches } = props;

  // UseEffect
  useEffect(() => {
    getSearches();
  }, []);

  return (
    <div className="previous-searches">
      <h3>Prior Search History</h3>
      {savedSearches.length > 0
        ? savedSearches.map((search) => {
            return (
              <SearchCard
                deleteSearch={deleteSearch}
                search={search}
                key={search.id}
              />
            );
          })
        : null}
    </div>
  );
}

export default SavedSearches;
