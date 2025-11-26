import { type IFilters, type Types } from "@/types";
import BaseFilter from "./BaseFilter";

/**
 * Type filter component
 * @param filters - The filters to apply
 * @param setFilters - The function to set the filters
 * @param className - The class name for the filter
 * @returns The type filter component
 */
function TypeFilter({filters, setFilters, className=""}: {filters: IFilters, setFilters: (value: IFilters) => void, className?: string}) {
  const types: Types[] = [
    "Domestic",
    "International"
  ]

  return (
    <BaseFilter
      selectedValue={filters.type}
      setSelectedValue={(value) => setFilters({...filters, type: value})}
      options={types}
      label="Type"
      className={className}
    />
  )
}

export default TypeFilter
