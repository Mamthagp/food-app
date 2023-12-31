import React, { lazy, Suspense, useState, useEffect } from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import { Provider } from "react-redux"
import Header from "./components/Header"
import Body from "./components/Body"
//import About from "./components/About"
import Contact from './components/Contact'
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import Shimmer from "./components/Shimmer"
//import Grocery from "./components/Grocery"
import UserContext from "./utils/UserContext"
import appStore from "./utils/appStore"
import Cart from "./components/Cart"

// Chunking
// Code Splitting
// On-demand loading
// lazy loading
// Dynamic bunding
// Dynamic import 

const Grocery = lazy(() => import('./components/Grocery'))
const About = lazy(() => import('./components/About'))



const AppLayout = () => {
    const [ userName, setUserName ] = useState(null)

    useEffect(() => {
        const data = {
            name : 'Mamatha Gowdru Param'
        }
        setUserName(data.name)
    }, [])

    return (
       <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
                <div className="app">
                    {/* <UserContext.Provider value={{loggedInUser: 'Mamtha'}}> */}
                        <Header />
                    {/* </UserContext.Provider> */}
                    <Outlet />
                </div>
            </UserContext.Provider>
       </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading!...</h1>}><About /></Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path:`/restaurants/:resId`,
                element: <RestaurantMenu />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer/>}><Grocery /></Suspense>
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)

























// ------ Parent-Child components

// const Child = () => <h1>React Child</h1>

// const Parent = (props) => {
//     return (
//         <div>
//             <Child />
//             <h2>React Parent</h2>
//         </div>
//     )
// }

// --------- React Element --------
// const heading = <h1 id='heading'>React Element with JSX 🚀</h1>

// --------  React Function Component --------
// const HeadingComponent = () => <h1 id='heading'>React Function Component 🚀</h1>

// const root = ReactDOM.createRoot(rootHandle)

// root.render(<HeadingComponent />)
 
// -------- USING React.createElement() method core concept -----------

// const parent = React.createElement(
//     "div", 
//     { id: "parent" }, 
//     [
//         React.createElement(
//                         "div",  
//                         { id: "child" },
//                         [
//                             React.createElement("h1", {}, "I am a h1 tag"),
//                             React.createElement("h2", {}, "I am a h2 tag")
//                         ]
//                     ),
//         React.createElement(
//                         "div",
//                         { id: 'child2'},
//                         [
//                             React.createElement("h1", {}, "I'm a h1 tag"),
//                             React.createElement("h2", {}, "I'm a h2 tag ")
//                         ]
//         )
//     ]
// )

// const h1Handle = React.createElement(
//     "h1", 
//     {id: "heading"}, 
//     "Hello React!"
// )