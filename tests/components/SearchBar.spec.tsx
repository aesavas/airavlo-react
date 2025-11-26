import SearchBar from "@/components/SearchBar";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";


describe("SearchBar component", () => {
  it("render SearchBar component", () => {
    render(<SearchBar searchQuery="query" setSearchQuery={() => {}} />)
    expect(screen.getByPlaceholderText("Search by airport code, name, city or country...")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveValue("query")
  })
})
