import { useState,useEffect } from "react";
import {useParams} from "react-router-dom";
import Schimmer from "./schimmer";
import {IMG_CDN_URL} from "../constants";


const RestaurantMenu =  ()=>{
    const params = useParams(); 
    const {id} = params;
    const [restaurant,setrestaurant] = useState(null);
    
    useEffect(()=>{
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo(){
       const data =  await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6558126&lng=77.2419522&restaurantId="+id);
       const json  = await data.json();
       /*console.log(json.data);*/
       setrestaurant(json.data);
    }

    if(!restaurant){
        return <Schimmer/>
    }
    return(
    <div>
        <div>
            <h1>restaurent id : {id}</h1>
            {console.log(restaurant)}
            <img src={IMG_CDN_URL+ restaurant.cards[0].card.card.info.cloudinaryImageId }></img>
            <h2>{restaurant.cards[0].card.card.info.name}</h2>   {/**Intial rendering error */}
            <h3>{restaurant?.cards[0]?.card?.card?.info?.id}</h3>
            <h3>{restaurant?.cards[0]?.card?.card?.info?.city}</h3>
            <h3>{restaurant.cards[0].card.card.info.areaName}</h3>
            <h3>{restaurant.cards[0].card.card.info.costForTwo}</h3>
                
        </div>
        <div>
            <h1>Menu</h1>
            <ul>
                {/*Menu items */}
            </ul>
        </div>
    </div>
    )
}

export default  RestaurantMenu;


// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6558126&lng=77.2419522&restaurantId=229&submitAction=ENTER