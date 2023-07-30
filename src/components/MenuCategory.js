import { useState } from "react"
import MenuItemList from "./MenuItemList"

const MenuCategory = (props) => {
    const { title, itemCards, categories } = props.category
    const { showItem, setShowItem } = props
    const [ toggle, setToggle ] = useState(false)

    const handleShow = () => {
        setShowItem(showItem)
        setToggle(!toggle)
    }

    return (
        <div className="w-6/12 m-auto bg-gray-0 border-b-[16px] border-gray-100 px-4 py-2 mb-10">
            <div className="flex justify-between" onClick={handleShow} >
                <p className="font-bold text-base">{title} ({itemCards ? itemCards.length : categories.length}) </p>
                <p className="text-xl text-blue-950">{ !toggle ? '↓' : '↑'}</p>
            </div>
            {(showItem && toggle) && <MenuItemList categories = {categories} itemCards={itemCards} />}
           
        </div>
    )
}

export default MenuCategory

