import '../assets/DataTable.css'
import airportsInfo from '../data/airports-info.json'

function DataTable() {

  const airports = Object.values(airportsInfo)

  const tableHeaders: string[] = [" ", "Code", "Airport Name", "City", "Country", "More Details"]

  return (
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
  )
}

export default DataTable
