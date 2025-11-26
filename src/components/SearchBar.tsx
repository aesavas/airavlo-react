/**
 * Search bar component
 * @param searchQuery - The search query
 * @param setSearchQuery - The function to set the search query
 * @returns The search bar component
 */
function SearchBar({searchQuery, setSearchQuery}: {searchQuery: string, setSearchQuery: (query: string) => void}) {
  return (
    <div className="row mb-3">
      <div className="col-12 col-md-8">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Search by airport code, name, city or country..."
        />
      </div>
    </div>
  )
}

export default SearchBar
