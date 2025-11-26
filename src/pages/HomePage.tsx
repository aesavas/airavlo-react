

import DataFilters from "@/components/DataFilters";
import DataTable from "@/components/DataTable";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import SortingDropdown from "@/components/SortingDropdown";
import airportsInfo from "@/data/airports-info.json";
import type { IAirport, IFilters, ISortOption } from "@/types";
import { getProcessedAirports } from "@/utils/dataOperations";
import { useMemo, useState } from "react";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")

  const [activeSort, setActiveSort] = useState<ISortOption>({
    id: 1,
    menuText: "Code (A-Z)",
    column: "code",
    direction: "asc"
  })

  const [filters, setFilters] = useState<IFilters>({
    continent: "All",
    country: "All",
    passengerVolume: "All",
    type: "All"
  });

  const [airports] = useState<IAirport[]>(Object.values(airportsInfo))

  const processedAirports = useMemo(
    () => getProcessedAirports(airports, filters, searchQuery, activeSort),
    [airports, filters, searchQuery, activeSort]
  );

  return(
    <>
      <header>
        <NavBar />
      </header>
      <main className="container mt-4">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <DataFilters filters={filters} setFilters={setFilters} />
        <SortingDropdown activeSort={activeSort} setActiveSort={setActiveSort} />
        <DataTable airports={processedAirports} />
      </main>
      <footer className="container mt-4 text-center">
        <p>© 2025 Airavlo. Made with <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a> by Ali Emre Savas.</p>
      </footer>
    </>
  )
}

export default HomePage
