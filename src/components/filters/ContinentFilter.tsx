import { type Continent, type IFilters } from "@/types";
import BaseFilter from "./BaseFilter";

/**
 * Continent filter component
 * @param filters - The filters to apply
 * @param setFilters - The function to set the filters
 * @param className - The class name for the filter
 * @returns The continent filter component
 */
function ContinentFilter({filters, setFilters, className}: {filters: IFilters, setFilters: (value: IFilters) => void, className: string}) {
  const continents: Continent[] = [
  "Africa",
  "Antarctica",
  "Asia",
  "Europe",
  "North America",
  "Oceania",
  "South America",
]

  return (
    <BaseFilter
      selectedValue={filters.continent}
      setSelectedValue={(value) => setFilters({...filters, continent: value})}
      options={continents}
      label="Continent"
      className={className}
    />
  )
}

export default ContinentFilter
