
import type { IAirport, IFilters, ISortOption } from "../types";

/**
 * Apply filters to the data
 * @param data - The data to filter
 * @param filters - The filters to apply
 * @returns The filtered data
 */
export function applyFilters(data: IAirport[], filters: IFilters): IAirport[] {
  return data.filter((airport) => {
    // Check if the airport matches the selected filters
    const matchesContinent = filters.continent === "All" || airport.continent === filters.continent;
    const matchesCountry = filters.country === "All" || airport.country === filters.country;
    const matchesPassengerVolume = filters.passengerVolume === "All" || airport.passengerVolume === filters.passengerVolume;
    const matchesType = filters.type === "All" || airport.type === filters.type;

    // Return true if it matches the search and all filters
    return matchesContinent && matchesCountry && matchesPassengerVolume && matchesType;
  })
}

/**
 * Apply search to the data
 * @param data - The data to search
 * @param searchQuery - The search query
 * @returns The searched data
 */
export function applySearch(data: IAirport[], searchQuery: string): IAirport[] {
  return data.filter((airport) => (
    airport.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    airport.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    airport.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    airport.country.toLowerCase().includes(searchQuery.toLowerCase())
  ))
}

/**
 * Apply sort to the data
 * @param data - The data to sort
 * @param activeSort - The sort option
 * @returns The sorted data
 */
export function applySort(data: IAirport[], activeSort: ISortOption): IAirport[] {
  return data.sort((x,y) => {
    const column = activeSort.column as keyof IAirport
    const direction = activeSort.direction === 'asc' ? 1 : -1

    return (x[column] as string).localeCompare(y[column] as string) * direction
  })
}

/**
 * Get processed airports
 * @param data - The data to process
 * @param filters - The filters to apply
 * @param searchQuery - The search query
 * @param activeSort - The sort option
 * @returns The processed data
 */
export function getProcessedAirports(
  data: IAirport[],
  filters: IFilters,
  searchQuery: string,
  activeSort: ISortOption
): IAirport[] {
  return applySort(
    applySearch(
      applyFilters(data, filters),
      searchQuery
    ),
    activeSort
  );
}
