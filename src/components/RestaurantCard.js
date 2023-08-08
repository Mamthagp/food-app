import { CDN_URL } from '../utils/constants'

const RestaurantCard = (props) => {
    const { resItem } = props
    const { name, cloudinaryImageId, cuisines, costForTwo, sla,  avgRating, aggregatedDiscountInfoV3 } = resItem
    
    return (
        <div data-testid="resCard" 
            className="m-4 p-4 w-[250px] bg-gray-100 rounded-md hover:bg-slate-100 hover:border hover:border-gray-200 hover:border-solid ">
            <div className='relative'>
                <img src={`${CDN_URL}/${cloudinaryImageId}`} className="resImg rounded-lg"/>
                <p className='absolute px-1 text-xs right-0 rounded top-0 bg-gradient-to-tr bg-gray-700 text-white'>{aggregatedDiscountInfoV3?.header}</p>
            </div>
            <h3 className='font-bold pt-4 pb-3 text-lg'>{name.length > 20 ? name.slice(0, 20) + '...' : name }</h3>
            <p className='text-gray-700 text-xs'>{cuisines.join(', ').length > 30 ? cuisines.join(', ').slice(0, 30) + '...' : cuisines.join(', ')}</p>
            <p className='text-gray-500 text-xs'>{costForTwo} </p>
            <p className='text-yellow-700 text-xs'> {avgRating} stars</p>
            <p className='text-gray-500 text-xs'>{sla.deliveryTime} Mins</p>
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