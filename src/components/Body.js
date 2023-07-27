import { useState, useEffect } from "react"
import { LIST_OF_RESTAURANT } from "../utils/constants"
import { Link } from 'react-router-dom'
import Shimmer from "./Shimmer"
import useOnlineStatus from "../utils/useOnlineStatus"
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard"

const Body = () => {
    const [ search, setSearch ] = useState('')
    const [ listRestaurant, setListRestaurant ] = useState([])

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(LIST_OF_RESTAURANT)
        const json = await data.json()
        console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setListRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleFilter = () => {
        const filteredRatings = listRestaurant.filter(ele => ele.info.avgRating > 4) 
        setListRestaurant(filteredRatings)
    }

    const onlineStatus = useOnlineStatus()
    if(onlineStatus === false) 
    return (
        <h1 className="font-bold">
            Looks like you are offline!! Please check your connection
        </h1>
    )
    

    return listRestaurant?.length === 0 ? <Shimmer /> : (
            <div className="body">
            <div className="search_filter flex justify-between mb-6">
                <div className="searchBar" >
                    <form>
                        <input type="text" value={search} onChange={handleChange} placeholder="Search here..." className="px-3 py-2 bg-white border border-slate-300 rounded-md" />
                        <input type="button" value="Search" className="rounded bg-green-800 ms-2 py-2 px-3 text-white"/>
                    </form>
                </div>
                <div className="filter">
                    <button className="rounded py-2 px-3 mx-4 bg-gray-400 text-slate-100" onClick={handleFilter}>Top Rated Restaurants</button>
                </div>
            </div>
            <div className="resContainer flex flex-wrap">
               {
                listRestaurant?.filter(filSearch => filSearch.info.name.toLowerCase().includes(search.toLowerCase())).map((ele) => {
                        return (
                                <Link 
                                        key={ele.info.id} 
                                        to={`/restaurants/${ele.info.id}`}>
                                    {   
                                        ele.info.promote ? (
                                            <RestaurantCardPromoted resItem={ele.info} />
                                        ) : (
                                            <RestaurantCard  resItem={ele.info} />
                                        )
                                    }
                                </Link>
                        )
                    })
               }
            </div>
        </div>
    )
}

export default Body