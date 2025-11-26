import countryInfo from '@/data/countries.json'
import type { ICountry, IFilters } from '@/types'

/**
 * Country filter component
 * @param filters - The filters to apply
 * @param setFilters - The function to set the filters
 * @param className - The class name for the filter
 * @returns The country filter component
 */
function CountryFilter({filters, setFilters, className=""}: {filters: IFilters, setFilters: (value: IFilters) => void, className?: string}) {
  const countries: ICountry[] = countryInfo

  return (
    <div className={`col-4 ${className}`}>
      <div className="form-floating">
        <select
          value={filters.country}
          id="countryFilter"
          className="form-select mb-3"
          onChange={(e) => setFilters({...filters, country: e.target.value})}
        >
          <option value="All">All</option>
          {countries.map((country, index) => (
            <option key={`${country.countryCode}-${index}`} value={country.name}>
              {country.flag} {country.name}
            </option>
          ))}
        </select>
        <label htmlFor="countryFilter">Country</label>
      </div>
    </div>
  )
}

export default CountryFilter
