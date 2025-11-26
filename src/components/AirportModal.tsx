import type { IAirport } from '@/types'
import AirlineList from './AirlineList'

/**
 * AirportModal component
 * @param {Object} airport - The airport object
 * @param {Object} setAirport - The function to set the airport object
 * @param {boolean} show - Whether the modal is shown or not
 * @param {function} setShow - The function to set the show state
 */
function AirportModal({ airport, setAirport, show, setShow }: { airport: IAirport | null, setAirport: (value: IAirport | null) => void, show: boolean, setShow: (value: boolean) => void }) {
  return (
    <>
      {/* Main modal container */}
      <div
        className={`modal fade ${show ? 'show' : ''}`}
        style={{ display: show ? 'block' : 'none' }}
        tabIndex={-1}
      >
        {airport && (
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{airport.name} ({airport.code})</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    setAirport(null)
                    setShow(false)
                  }}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-6">
                    <p><strong>City:</strong> {airport.city}</p>
                    <p><strong>Country:</strong> {airport.country}</p>
                    <p><strong>Continent:</strong> {airport.continent}</p>
                  </div>
                  <div className="col-6">
                    <p><strong>Year Opened:</strong> {airport.yearOpened}</p>
                    <p><strong>Type:</strong> {airport.type}</p>
                    <p><strong>Passenger Volume:</strong> {airport.passengerVolume}</p>
                  </div>
                </div>
                <div className="row">
                  <p><strong>Website:</strong> <a href={airport.website}>{airport.website}</a></p>
                </div>
                <div className="row">
                  <AirlineList majorAirlines={airport.majorAirlines} />
                </div>
                <div className="row">
                  <iframe
                    width="300"
                    height="200"

                    style={{border: 0}}
                    src={`https://www.google.com/maps?q=${airport.coordinates.lat},${airport.coordinates.lng}&z=15&output=embed`}
                    allowFullScreen
                  >
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        )}
    </div >
      {/* Modal backdrop */}
      <div
        className={`modal-backdrop fade ${show ? 'show' : ''}`}
        style={{ display: show ? 'block' : 'none' }}
      ></div>
    </>
  )
}

export default AirportModal
