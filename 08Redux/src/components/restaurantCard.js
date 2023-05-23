import { IMG_CDN_URL } from "../constants";
const RestaurantCard = ({cloudinaryImageId,name,cuisines,totalRatings})=>{
    return(
    <div className="card w-52  p-2 m-2 shadow-lg bg-violet-200 hover:bg-sky-700 ...">
        <img src={IMG_CDN_URL+cloudinaryImageId}></img>
        <h4 className="font-bold text-xl">{name}</h4>
        <h5>{cuisines.join(",")}</h5>
        <h5>{totalRatings}</h5>
        
    </div>
)
}

export default RestaurantCard;     