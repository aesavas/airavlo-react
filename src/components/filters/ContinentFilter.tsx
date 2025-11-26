import { type Continent, type IFilters } from "@/types";
import BaseFilter from "./BaseFilter";


function ContinentFilter({filters, setFilters}: {filters: IFilters, setFilters: (value: IFilters) => void}) {
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
    />
  )
}

export default ContinentFilter
