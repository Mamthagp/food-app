import { useContext } from "react"
import UserContext from "../utils/UserContext"

const About = () => {

    const { loggedInUser } = useContext(UserContext)

    return (
        <div>
            <h1>About US</h1>
            
            <h2 className="font-bold">User Name : {loggedInUser}</h2>
        </div>
    )
}

export default About