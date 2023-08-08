import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import Body from "../Body"
import MOCK_DATA from "../mocks/RestaurantLists-mock.json"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

describe("Body Components test cases", () => {

    it("should Search restaurant list for burger text input", async () => {
        await act(async () => {
            render(
                <BrowserRouter>
                    <Body />
                </BrowserRouter>
            )
        })

        const searchBtn = screen.getByRole("button", {name: /Search/i})
        const searchInput = screen.getByTestId("searchInput")
        fireEvent.change(searchInput, { target: {value: "burger"}})
        // fireEvent.click(searchBtn)
        const resCards = screen.getAllByTestId("resCard")
        expect(resCards.length).toBe(1)
    })

    it("should filter top rated restaurants", async () => {
        await act(async () => {
            render (
                <BrowserRouter> 
                    <Body />
                </BrowserRouter>
            )
        })

        const cardsBeforeFilter = screen.getAllByTestId("resCard")
        expect(cardsBeforeFilter.length).toBe(9)
        const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurants"})
        fireEvent.click(topRatedBtn)
        const cardsAfterFilter = screen.getAllByTestId("resCard")
        expect(cardsAfterFilter.length).toBe(8)
    })
})