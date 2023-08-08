import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { Provider } from "react-redux"
import "@testing-library/jest-dom"
import appStore from "../../utils/appStore"
import RestaurantMenu from "../RestaurantMenu"
import Header from '../Header'
import MOCK_DATA from "../mocks/RestaurantMenu.json"
import { BrowserRouter } from "react-router-dom"
import Cart from "../Cart"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

describe("should render Restaurant Menu Component", () => {
    it("should load menu category title and click accordion", async () => {
        await act(async() => {
            render(
                <BrowserRouter>
                    <Provider store={appStore} >
                        <Header />
                        <RestaurantMenu />
                        <Cart />
                    </Provider>
                </BrowserRouter>
            )
        })

        //1
        const accordionHeader = screen.getByText("Shravan Special (3)")
        fireEvent.click(accordionHeader)

        // 2
        expect(screen.getAllByTestId("foodItems").length).toBe(3)
        expect(screen.getByText("Cart (0)")).toBeInTheDocument()

        // 3
        const addBtns = screen.getAllByRole("button", {name: "ADD"})
        fireEvent.click(addBtns[0])

        // 4
        const cartItems = screen.getByText("Cart (1)")
        expect(cartItems).toBeInTheDocument()

        // 5
        fireEvent.click(addBtns[1])
        expect(screen.getByText("Cart (2)")).toBeInTheDocument()

        // 6
        fireEvent.click(addBtns[2])
        expect(screen.getByText("Cart (3)")).toBeInTheDocument()

        // cart items
        expect(screen.getAllByTestId("foodItems").length).toBe(6)

        // clear cart
        fireEvent.click(screen.getByRole("button", { name: "Clear Cart"}))

        expect(screen.getAllByTestId("foodItems").length).toBe(3)

        expect(screen.getByText("Your cart is empty. Add your first item to the cart!!")).toBeInTheDocument()

    })

    
})
   