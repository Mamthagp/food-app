import useRestaurantMenu from "../utils/useRestaurantMenu"
import { useParams } from "react-router"
import Shimmer from "./Shimmer"
import { MENU_IMG } from '../utils/constants'

const RestaurantMenu = () => {
    const { resId } = useParams()
    const restInfo = useRestaurantMenu(resId)

    if(restInfo.length === 0) return <Shimmer /> 
    
    const { name, cuisines, avgRating, costForTwoMessage } = restInfo?.cards[0]?.card?.card?.info
    const { itemCards } = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    return (
        <div>
            <div className="border p-4 mb-4">
                <h1>{name}</h1>
                <h3>{cuisines.join(', ')}</h3>
                <h3>{avgRating}</h3>
                <h3>{costForTwoMessage}</h3>
            </div>
            <h2 className="text-lg font-bold">Menu</h2>
            <ul>
                {
                    itemCards.map((menu) => {
                        return <li key={menu.card.info.id} className="block border mb-4 p-4 shadow-md bg-light-50">
                            <span className="flex justify-between">
                                <span>
                                    <span className="block">{menu.card.info.name}</span> 
                                    <span className="text-gray-600 block">₹ {menu.card.info.price / 100}</span>
                                    <span className="block text-xs w-[600px] text-gray-400">{menu.card.info.description}</span>
                                </span>
                                <img src={`${MENU_IMG}${menu.card.info.imageId}`} className="w-[100px]"/>
                           </span>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu