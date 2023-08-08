import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import MenuItemList from "./MenuItemList"
import { clearCart } from "../utils/cartSlice"


const Cart = () => {
    const cartItems = useSelector((store) => {
        return store.cart.items
    })
    console.log(cartItems)

    const dispatch = useDispatch()
    
    const handleClearCart = () => {
        dispatch(clearCart())
    }

    const totalPrice = cartItems.reduce((prevVal, curVal) => {
        return (prevVal + curVal.card.info.price / 100)
    }, 0)
    console.log(totalPrice)

    return (
        <div className="w-4/12 m-auto">
            <div>
                {cartItems.length <= 0 ? (
                   <div>
                     <p>Your cart is empty. Add your first item to the cart!!</p>
                    <button className="border p-2 rounded-md bg-green-700 text-white mt-4"><Link to="/"> List of Restaurants</Link></button>
                   </div>
                ) : (
                    <>
                        {cartItems.length !== 0 && (
                            <button onClick={handleClearCart} className="border p-2 rounded-md bg-red-400 text-white">Clear Cart</button>
                        )}
                        <MenuItemList itemCards={cartItems} />
                        <>
                            <h2 className="font-bold">Bill Details:</h2>
                            <p className="flex justify-between text-sm"><span>Item Total :</span><span>{totalPrice}</span></p>
                            <p className="flex justify-between border-b pb-2 mb-2 text-sm"><span>Number of Items : </span><span>{cartItems.length}</span></p>
                            <p className="flex justify-between text-sm font-bold"><span>TO PAY : </span><span>₹ {totalPrice}</span> </p>
                        </>
                    </>
                )}
                
            </div>
        </div>
    )
}

export default Cart

