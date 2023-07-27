import { CDN_URL } from '../utils/constants'

const RestaurantCard = (props) => {
    const { resItem } = props
    const { name, cloudinaryImageId, cuisines, costForTwo, sla,  avgRating } = resItem
    return (
        <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-md hover:bg-slate-100 hover:border hover:border-gray-200 hover:border-solid ">
            <img src={`${CDN_URL}/${cloudinaryImageId}`} className="resImg rounded-lg"/>
            <h3 className='font-bold pt-4 pb-3 text-lg'>{name}</h3>
            <p className='text-gray-700'>{cuisines.join(', ')}</p>
            <p className='text-gray-500'>{costForTwo} </p>
            <p className='text-yellow-700'> {avgRating} stars</p>
            <p className='text-gray-500'>{sla.deliveryTime} Mins</p>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard