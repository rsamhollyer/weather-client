import SearchCard from "./SearchCard";
import { useEffect } from "react";
function SavedSearches(props) {
  const { savedSearches, deleteSearch, getSearches } = props;

  useEffect(() => {
    getSearches();
  }, []);

  return (
    <div className="row mt-4 previous-searches">
      <h2 className="fw-bold fs-5">Saved Searches</h2>
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
