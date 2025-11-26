import NavBar from "@/components/NavBar";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";


describe("NavBar component", () => {
  it("render NavBar component", () => {
    render(<NavBar />)
    expect(screen.getByText("✈️ Airavlo")).toBeInTheDocument()
    expect(screen.getByText("Source Code")).toBeInTheDocument()

    // get all links
    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(2)
    expect(links[0]).toHaveAttribute("href", "#");
    expect(links[1]).toHaveAttribute("href", "https://github.com/aesavas/airavlo-react");
  })
})
