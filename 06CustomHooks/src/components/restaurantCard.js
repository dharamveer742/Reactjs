import { IMG_CDN_URL } from "../constants";
const RestaurantCard = ({cloudinaryImageId,name,cuisines,totalRatings})=>{
    return(
    <div className="card">
        <img src={IMG_CDN_URL+cloudinaryImageId}></img>
        <h4>{name}</h4>
        <h5>{cuisines.join(",")}</h5>
        <h5>{totalRatings}</h5>
        
    </div>
)
}

export default RestaurantCard;