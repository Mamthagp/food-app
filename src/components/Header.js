import { LOGO_URL } from '../utils/constants'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'

const Header = () => {
    const [ toggle, setToggle ] = useState(true)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const onlineStatus = useOnlineStatus()

    return (
        <div className="flex justify-between bg-purple-900 shadow-md mb-6">
            <div className="logo">
                <img data-testid="logo" src = {LOGO_URL} className="w-32"  />
            </div>
            <div className="flex items-center">
                <ul className='flex text-white'>
                    <li className='p-4'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='p-4'>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className='p-4'>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className='p-4'>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className='p-4'>Cart</li>
                    <button onClick={handleToggle} className='p-4 cursor-pointer hover:border-solid hover:border-gray-400 hover:bg-purple-100 hover:text-purple-950'>{ toggle ? 'Login' : 'Logout' }</button>
                    <li className='p-4'>
                        Online Status<span data-testid="online-status"> { onlineStatus ? '✅' : '🔴' }</span>
                    </li>
                </ul>
            </div>
           
        </div> 
        
    )
}

export default Header