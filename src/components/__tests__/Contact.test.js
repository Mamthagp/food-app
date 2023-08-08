import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Contact from "../Contact"

describe("Contact Us page test-case", () => {
    it("Should load contact us component", () => {
        render(<Contact />)
        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument()
    })
    
    it("Should load button inside Contact component", () => {
        render(<Contact />)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
    })
    
    it("Should load input name inside Contact component", () => {
        render(<Contact />)
        const inputName = screen.getByPlaceholderText('name')
        expect(inputName).toBeInTheDocument()
    })
    
    it("Should load 2 input boxes on the Contact component", () => {
        // render something on jsdom
        render(<Contact />)
        // querying
        const inputBoxes = screen.getAllByRole('textbox')
        // assertion
        expect(inputBoxes.length).toBeGreaterThan(0)
        expect(inputBoxes.length).not.toBe(3)
    })
})
