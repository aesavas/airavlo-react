import type { Continent, PassengerVolume, Types } from '../../types'

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
