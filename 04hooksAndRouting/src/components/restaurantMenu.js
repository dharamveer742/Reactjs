import { useState,useEffect } from "react";
import {useParams} from "react-router-dom";


const RestaurantMenu =  ()=>{
    const params = useParams(); 
    const {id} = params;
    const [restaurant,setrestaurant] = useState({});
    
    useEffect(()=>{
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo(){
       const data =  await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6558126&lng=77.2419522&restaurantId=229&submitAction=ENTER");
       const json  = await data.json();
       console.log(json.data);
       setrestaurant(json.data);
    }

    return(<>
        <h1>restaurent id : {id}</h1>
        {console.log(id)}
        <h2>{restaurant?.cards[0]?.card?.card?.info?.name}</h2>
    </>)
}

export default  RestaurantMenu;


// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6558126&lng=77.2419522&restaurantId=229&submitAction=ENTER