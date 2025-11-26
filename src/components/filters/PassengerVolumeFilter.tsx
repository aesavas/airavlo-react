import { type IFilters, type PassengerVolume } from "@/types";
import BaseFilter from "./BaseFilter";


/**
 * Passenger volume filter component
 * @param filters - The filters to apply
 * @param setFilters - The function to set the filters
 * @param className - The class name for the filter
 * @returns The passenger volume filter component
 */
function PassengerVolumeFilter({filters, setFilters, className=""}: {filters: IFilters, setFilters: (value: IFilters) => void, className?: string}) {
  const passengerVolumes: PassengerVolume[] = [
    "Medium",
    "Large",
    "Major Hub"
  ]

  return (
    <BaseFilter
      selectedValue={filters.passengerVolume}
      setSelectedValue={(value) => setFilters({...filters, passengerVolume: value})}
      options={passengerVolumes}
      label="Passenger Volume"
      className={className}
    />
  )
}

export default PassengerVolumeFilter
