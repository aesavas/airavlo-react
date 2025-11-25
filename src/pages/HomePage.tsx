

import DataTable from "../components/DataTable";
import NavBar from "../components/NavBar";

function HomePage() {
  return(
    <>
      <header>
        <NavBar />
      </header>
      <main className="container mt-4">
        <DataTable />
      </main>
    </>
  )
}

export default HomePage
