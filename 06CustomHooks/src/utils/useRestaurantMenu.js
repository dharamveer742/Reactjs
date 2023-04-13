import { useState,useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";
const useRestaurantMenu = (id)=>{
    const [restaurant,setrestaurant] = useState(null);   // state variable
   
    
    useEffect(()=>{
        getRestaurantInfo();
        
    },[]) 

    async function getRestaurantInfo(){
       const data =  await fetch(FETCH_MENU_URL+id);
       const json  = await data.json();
       setrestaurant(json.data);  
    }
    return restaurant ;

}
export default useRestaurantMenu;