import ContinentFilter from '@/components/filters/ContinentFilter'
import CountryFilter from '@/components/filters/CountryFilter'
import PassengerVolumeFilter from '@/components/filters/PassengerVolumeFilter'
import TypeFilter from '@/components/filters/TypeFilter'
import type { IFilters } from '@/types'
import { useState } from 'react'


/**
 * Data filters component
 * @param filters - The filters to apply
 * @param setFilters - The function to set the filters
 * @returns The data filters component
 */
function DataFilters({filters, setFilters}: {filters: IFilters, setFilters: (value: IFilters) => void}) {
  const [showMoreFilters, setShowMoreFilters] = useState(false)

  const clearFilters = () => {
    setFilters({
      continent: "All",
      country: "All",
      passengerVolume: "All",
      type: "All"
    })
  }

  return (
      <>
        <div className="row align-items-stretch flex-column-reverse flex-md-row mb-3 mb-md-0">
          <div className="col-md-8">
            <div className="row">
              <ContinentFilter className="col-12 col-md-6 mb-3 mb-md-0" filters={filters} setFilters={setFilters} />
              <CountryFilter className="col-12 col-md-6" filters={filters} setFilters={setFilters} />
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-md-end mb-3 mb-md-0">
            <button
              className="btn btn-secondary"
              style={{height: "3.5rem"}}
              onClick={() => setShowMoreFilters(!showMoreFilters)}
            >
              {showMoreFilters ? 'Less Filters' : 'More Filters'}
            </button>
            <button
              className="btn btn-secondary ms-2"
              style={{height: "3.5rem"}}
              onClick={clearFilters}
            >
              Clear Filter
            </button>
          </div>
        </div>

        <div className={`collapse ${showMoreFilters ? 'show' : ''}`}>
          <div className="row">
            <PassengerVolumeFilter
              className="col-12 col-md-4 mb-3 mb-md-0"
              filters={filters}
              setFilters={setFilters}
            />
            <TypeFilter
              className="col-12 col-md-4"
              filters={filters}
              setFilters={setFilters}
            />
          </div>
        </div>
      </>
  )
}

export default DataFilters
