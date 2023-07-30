import { getAllByTestId, render } from '@testing-library/react'
//import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter or StaticRouter both works
import { StaticRouter } from 'react-router-dom/server'
import Header from '../Header'

test("Logo should load on rendering header", () => {
    // load header
    const header = render(
        <StaticRouter> {/* Wrap your component with StaticRouter or MemoryRouter */}
        <Header />
        </StaticRouter>
    )
    // check if logo is loaded
    const logo = header.getAllByTestId("logo")
    expect(logo[0].src).toBe('https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png')
    //console.log(logo)
})



test("Online Status should be online(green) on rendering header", () => {
    const header = render(
        <StaticRouter>
            <Header />
        </StaticRouter>
    )
    const onlineStatus = header.getByTestId("online-status")
    expect(onlineStatus.innerHTML).toBe(" ✅")
})

