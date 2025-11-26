import { type IFilters, type Types } from "@/types";
import BaseFilter from "./BaseFilter";

function TypeFilter({filters, setFilters}: {filters: IFilters, setFilters: (value: IFilters) => void}) {
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
    />
  )
}

export default TypeFilter
