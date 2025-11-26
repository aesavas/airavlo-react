import SortingDropdown from "@/components/SortingDropdown";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";


describe("SortingDropdown component", () => {
  it("render SortingDropdown component", () => {
    render(<SortingDropdown activeSort={{ id: 1, menuText: "Code (A-Z)", column: "code", direction: "asc" }} setActiveSort={() => {}} />)
    expect(screen.getByRole("button")).toBeInTheDocument()

    // get the <ul>
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();

    // get all <li>
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(4); // you have 4 sort options
    expect(items[0]).toHaveTextContent("Code (A-Z)");
  })
})
