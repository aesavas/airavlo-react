import type { Continent, PassengerVolume, Types } from '@/types'

/**
 * Base filter component
 * @param selectedValue - The selected value
 * @param setSelectedValue - The function to set the selected value
 * @param options - The options to display
 * @param label - The label for the filter
 * @param className - The class name for the filter
 * @returns The base filter component
 */
function BaseFilter({selectedValue, setSelectedValue, options, label= "Label", className=""}: {selectedValue: string, setSelectedValue: (value: string) => void, options: Continent[] | PassengerVolume[] | Types[], label?: string, className?: string}) {
  return (
    <div className={`col-md-4 ${className}`}>
      <div className="form-floating">
        <select
          className="form-select mb-3"
          id={`${label.toLowerCase()}-filter`}
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
        >
          <option value="All">All</option>
          {options.map((option, index) => (
            <option key={`${option}-${index}`} value={option}>
              {option}
            </option>
          ))}
        </select>
        <label htmlFor={`${label}-filter`}>{label}</label>
      </div>
    </div>
  )
}

export default BaseFilter
