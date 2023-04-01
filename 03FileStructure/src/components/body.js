import { restaurantList } from "../constatnts";
import RestaurantCard from "./restaurantCard";
import {useState} from "react";

const filterData=(searchText,restaurants)=>{
    const filterData= restaurantList.filter((restaurant)=>restaurant.data.name.includes(searchText));
    return filterData;
}

const Body = ()=>{
    const[inputText,setInputText] = useState("");
    const[restaurants,setRestaurants] = useState(restaurantList);
   /* const textObj =useState();
    console.log(typeof(textObj))  */
    
    return (
        <>
        <div className="input">
            <input onChange={(e)=>{setInputText(e.target.value)}} 
                type="text" value={inputText} placeholder="search" 
            />    
            

            <button onClick={()=>{
                const data = filterData(inputText,restaurants);
                setRestaurants(data);
            }}> 
                search
            </button> 
            
        </div>
        
        
        <div className="cards">          
            {restaurants.map((restaurant)=>{ return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>})}
        </div>
        </>
    )
}

export default Body;