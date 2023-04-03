import { restaurantList } from "../constants";
import RestaurantCard from "./restaurantCard";
import {useState,useEffect} from "react";
import Schimmer from "./schimmer";


const filterData=(searchText,restaurants)=>{
    const filterData= restaurantList.filter((restaurant)=>restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()));
    return filterData;
}



const Body = ()=>{
    // 

    const[allRestaurants,setAllRestaurants] = useState([]);
    const[inputText,setInputText] = useState("");
    const[restaurants,setRestaurants] = useState(restaurantList);
   /* const textObj =useState();
    console.log(typeof(textObj))  */


    // empty dependency array : once after intial render
    // dep array [inputText] :- once after intial render + every time after render(inpuText changes)

    useEffect(()=>{
        getRestaurant();
    },[])

    async function getRestaurant(){
        const restaurantData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3278298&lng=78.0325594&page_type=DESKTOP_WEB_LISTING"); 
        const json = await restaurantData.json();
        console.log(json)
       setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
       setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    
    // conditional rendering
    // restaturant is empty - load schimmer ui
    // restaurant has some data - load actual data ui

    if(!allRestaurants) return null  // Early return :- not render component

    if(restaurants?.length===0) return <h1>No restaturant Match</h1>

    return (allRestaurants?.length===0)?<Schimmer/>: (
        <>
        <div className="input">
            <input onChange={(e)=>{setInputText(e.target.value)}} 
                type="text" value={inputText} placeholder="search" 
            />    
            

            <button onClick={()=>{
                const data = filterData(inputText,allRestaurants);
                setRestaurants(data);
            }}> 
                search
            </button> 
            
        </div>
        
        <div className="cards">
            { /* logic if no restaturants found */}          
            {restaurants.map((restaurant)=>{ return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>})}
        </div>
        </>
    )
}

export default Body;