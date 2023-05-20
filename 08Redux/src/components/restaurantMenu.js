import { useState,useEffect } from "react";
import {useParams} from "react-router-dom";
import Schimmer from "./schimmer";
import {IMG_CDN_URL} from "../constants";
import useRestaurantMenu from "../utils/useRestaurantMenu"
import {useDispatch} from "react-redux"
import { addItem } from "../utils/cartSlice";
import {useDispatch} from "react-redux";
import {addItem} from "../utils/cartSlice"


const RestaurantMenu =  ()=>{
    console.log("checking");   // React triggers the reconciliation
    const params = useParams(); 
    const {id} = params;
    
    const restaurant = useRestaurantMenu(id)   /* when state changes inside hook then it returns  updated values to restaurant */
    console.log(restaurant);  
    const dispatch = useDispatch();            
    const handleItem=()=>{
            dispatch(addItem("grapes"));
    }

    if(!restaurant){
        return <Schimmer/>
    }
    return(
    <div>
        <div>
            <h1>restaurent id : {id}</h1>
           
            <img src={IMG_CDN_URL+ restaurant.cards[0].card.card.info.cloudinaryImageId }></img>
            <h2>{restaurant.cards[0].card.card.info.name}</h2>   {/**Intial rendering error */}
            <h3>{restaurant?.cards[0]?.card?.card?.info?.id}</h3>
            <h3>{restaurant?.cards[0]?.card?.card?.info?.city}</h3>
            <h3>{restaurant.cards[0].card.card.info.areaName}</h3>
            <h3>{restaurant.cards[0].card.card.info.costForTwo}</h3>
            <button className="bg-green-400 p-2 m-2" onClick={()=>handleItem()}>AddItem</button>
                
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