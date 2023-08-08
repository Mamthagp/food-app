import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import Header from "../Header"
import appStore from "../../utils/appStore"

describe('Header section test cases', () => {
    it("should render header component with a login button", () => {
        render( 
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>)
        const loginButton = screen.getByText('Login' || 'Logout')
        //const loginButton = screen.getByRole("button", {name: 'Login'})
        expect(loginButton).toBeInTheDocument()
    })

    it("should render header component with cart items to be zero", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )

        const cartItems = screen.getByText('Cart (0)')
        expect(cartItems).toBeInTheDocument()
    })

    it("should render header component with cart item", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )

        const cartItem = screen.getByText(/Cart/)
        expect(cartItem).toBeInTheDocument()
    })

    it('should change login button logout on click', () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )
        
        const loginButton = screen.getByRole("button", {name : 'Login'})
        fireEvent.click(loginButton)
        const logoutButton = screen.getByRole("button", {name: 'Logout'})
        expect(logoutButton).toBeInTheDocument()
    })
})