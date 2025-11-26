
/**
 * AirlineList component
 * @param {Array<string>} majorAirlines - Array of major airlines
 */
function AirlineList({majorAirlines}:{majorAirlines:Array<string>}) {
  return (
    <div
      className="accordion mt-2 mb-3"
      id="accordion"
    >
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            <p><strong>Major Airlines:</strong></p>
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          data-bs-parent="#accordion"
        >
          <div className="accordion-body">
            <ul>
              {majorAirlines.map((airline, index) => (
                <li key={`${airline}-${index}`}>{airline}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AirlineList
