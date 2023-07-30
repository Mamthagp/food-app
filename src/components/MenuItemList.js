import { MENU_IMG } from "../utils/constants"
const MenuItemList = (props) => {
    console.log(props.itemCards)
    const { itemCards, categories } = props

    return (
        <div className="mt-6">
            {itemCards.map((ele) => {
                return (
                    <div key={ele.card.info.id} className="flex justify-between items-center mb-6 border-b border-gray-300 pb-8 ">
                        <div>
                            <div className="text-xs text-red-900 mb-2">{ele.card.info.itemAttribute.vegClassifier === 'NONVEG' ? "🟥" : "✅"}</div>
                            <div className="text-base">{ele.card.info.name}</div>
                            <div className="text-xs text-gray-800 pb-2 pt-1">₹{ele.card.info.price / 100 }</div>
                            <div className="text-[11px] text-gray-400">{ele.card.info.description}</div>
                        </div>
                        <div className="ml-12 relative">
                            <div className="w-24">
                                <img src={`${MENU_IMG}${ele.card.info.imageId}`} className="rounded-sm" />
                            </div>
                            <button className="text-green-700 text-sm text-center block absolute -bottom-2 border border-gray-300 left-[8.5px] py-2 px-6 rounded-md bg-white">ADD</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MenuItemList