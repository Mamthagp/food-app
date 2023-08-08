import { useDispatch } from "react-redux"
import { MENU_IMG } from "../utils/constants"
import { addItem } from "../utils/cartSlice"

const MenuItemList = (props) => {
    const { itemCards, categories } = props
    
    const dispatch = useDispatch()

    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }

    return (
        <div className="mt-6" >
            {categories || itemCards?.map((ele) => {
                return (
                    <div 
                        data-testid="foodItems"
                        key={ele.card.info.id} className="flex justify-between items-center mb-6 border-b border-gray-300 pb-8 ">
                        <div>
                            <div className="text-xs text-red-900 mb-2">{ele.card.info.itemAttribute.vegClassifier === 'NONVEG' ? "🟥" : "✅"}</div>
                            <div className="text-base">{ele.card.info.name}</div>
                            <div className="text-xs text-gray-800 pb-2 pt-1">₹{ele.card.info.price ? ele.card.info.price / 100 : ele.card.info.defaultPrice / 100 }</div>
                            <div className="text-[11px] text-gray-400">{ele.card.info.description}</div>
                        </div>
                        <div className="ml-12 relative">
                            <div className="w-24">
                                <img src={`${MENU_IMG}${ele.card.info.imageId}`} className="rounded-sm" />
                            </div>
                            <button 
                                className="text-green-700 text-sm text-center block absolute -bottom-2 border border-gray-300 left-[8.5px] py-2 px-6 rounded-md bg-white"
                                onClick={() => {handleAddItem(ele)}}> ADD
                            </button>
                        </div>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default MenuItemList