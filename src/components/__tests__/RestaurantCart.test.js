import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/RestaurantCard-mock.json"

describe("RestaurantCard component test-cases", () => {
    it("should render component with props data", () => {
        render(
            <RestaurantCard resItem = {MOCK_DATA} />
        )

        const name = screen.getByText('EatFit')
        expect(name).toBeInTheDocument()
    })

    it("should render component with offer label", () => {
        render(
            <RestaurantCard resItem={MOCK_DATA}/>
        )

        const offerLabel = screen.getByText('40% OFF')
            expect(offerLabel).toBeInTheDocument()
    })
})