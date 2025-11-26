import type { ISortOption } from "@/types"

/**
 * Sorting dropdown component
 * @param activeSort - The active sort option
 * @param setActiveSort - The function to set the active sort option
 * @returns The sorting dropdown component
 */
function SortingDropdown({activeSort, setActiveSort}: {activeSort: ISortOption, setActiveSort: (value: ISortOption) => void}) {
  const sortOptions: ISortOption[] = [
    { id: 1, menuText: "Code (A-Z)", column: "code", direction: "asc" },
    { id: 2, menuText: "Code (Z-A)", column: "code", direction: "desc" },
    { id: 3, menuText: "Name (A-Z)", column: "name", direction: "asc" },
    { id: 4, menuText: "Name (Z-A)", column: "name", direction: "desc" },
  ]

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
      >Sort By</button>
      <ul className="dropdown-menu dropdown-menu-dark">
        {sortOptions.map(option => (
          <li key={option.id} onClick={() => setActiveSort(option)}>
            <span className={`dropdown-item ${option.id === activeSort.id ? 'active' : ''}`}>
              {option.menuText}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SortingDropdown
