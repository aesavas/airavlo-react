import { type IFilters, type PassengerVolume } from "@/types";
import BaseFilter from "./BaseFilter";


function PassengerVolumeFilter({filters, setFilters}: {filters: IFilters, setFilters: (value: IFilters) => void}) {
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
    />
  )
}

export default PassengerVolumeFilter
