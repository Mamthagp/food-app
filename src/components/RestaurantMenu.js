import useRestaurantMenu from "../utils/useRestaurantMenu"
import { useParams } from "react-router"
import { useState } from "react"
import Shimmer from "./Shimmer"
import MenuCategory from "./MenuCategory"

const RestaurantMenu = () => {
    const [ showItem, setShowItem ] = useState(null)
    const { resId } = useParams()
    const restInfo = useRestaurantMenu(resId)


    if(restInfo.length === 0) return <Shimmer /> 
    
    const { name, cuisines, avgRating, costForTwoMessage, totalRatingsString, areaName, sla } = restInfo?.cards[0]?.card?.card?.info
    //const { itemCards } = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    //console.log(restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categoriesMenu = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category) => {
        return category.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || category.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    })

    return (
        <div>
            <div className="w-6/12 m-auto  p-4 mb-4 text-lg">
                <div className="flex justify-between border-b border-gray-200 border-dashed pb-2 mb-2">
                    <div>
                        <h1 className="font-bold text-xl">{name}</h1>
                        <p className="text-xs text-gray-700 ">{cuisines.join(', ')}</p>
                        <p className="text-xs text-gray-700 ">{areaName}, {sla.lastMileTravelString}</p>
                    </div>
                    <div className="text-center border rounded-md p-1">
                        <h3 className="text-green-700 font-bold text-[15px] border-b border-dashed">★ {avgRating}</h3>
                        <h3 className="text-gray-500 text-[10px]">{totalRatingsString}</h3>
                    </div>
                </div>
                <div className="text-gray-500 text-sm flex">
                    <p className="mr-4">{sla.slaString}</p>
                    <h3>{costForTwoMessage}</h3>
                </div>
            </div>
            {
                categoriesMenu.map((category, index) => {
                    return <MenuCategory 
                                key={index}  
                                category = {category?.card?.card}
                                showItem={index === showItem ? true : false}
                                setShowItem={() => setShowItem(index)}
                            />
                })
            }
        </div>
    )
}

export default RestaurantMenu