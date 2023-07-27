import { useState, useEffect } from "react"
import { LIST_OF_RESTAURANT } from "./constants"

const useListOfRestaurants = () => {
    const [ listRestaurant, setListRestaurant ] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData =  async () => {
        const data = await fetch(LIST_OF_RESTAURANT)
        const json = await data.json()
        setListRestaurant(json.data)
    }

    return listRestaurant
}

export default  useListOfRestaurants