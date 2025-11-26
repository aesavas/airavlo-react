import '@/assets/DataTable.css'
import type { IAirport } from '@/types'
import { useState } from 'react'
import AirportModal from './AirportModal'

function DataTable({airports}:{airports: IAirport[]}) {
  const tableHeaders: string[] = [" ", "Code", "Airport Name", "City", "Country", "More Details"]

  const [showModal, setShowModal] = useState(false)
  const [selectedAirport, setSelectedAirport] = useState<IAirport | null>(null)

  return (
    <>
      <div className="table-wrapper hide-scrollbar my-3">
        <table className="table table-striped table-responsive table-bordered">
          <thead>
            <tr>
              {tableHeaders.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {airports && airports.length > 0 ? airports.map((airport, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{airport.code}</td>
                <td>{airport.name}</td>
                <td>{airport.city}</td>
                <td>{airport.country}</td>
                <td><button
                  className="btn btn-link link-offset-2 link-underline link-underline-opacity-0"
                  onClick={() => {
                    setSelectedAirport(airport)
                    setShowModal(true)
                  }}
                >🔍 More info</button></td>
              </tr>
            )) :
            <tr>
              <td colSpan={tableHeaders.length} className="text-center p-4">
                There is no data to display.
              </td>
            </tr>
            }
          </tbody>
        </table>
      </div>
      <AirportModal airport={selectedAirport} setAirport={setSelectedAirport} show={showModal} setShow={setShowModal} />
    </>

  )
}

export default DataTable
