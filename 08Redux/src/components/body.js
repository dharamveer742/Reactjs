import { restaurantList } from "../constants";
import RestaurantCard from "./restaurantCard";
import {useState,useEffect,useContext} from "react";
import Schimmer from "./schimmer";
import {Link} from "react-router-dom"
import useIsOnline from "../utils/useIsOnline"
import { filterData } from "../utils/common";
import UserContext from "../utils/userContext"






const Body = ()=>{
    // 

    const[allRestaurants,setAllRestaurants] = useState([]);
    const[inputText,setInputText] = useState("");
    const[restaurants,setRestaurants] = useState(restaurantList);
    const{user,setUser} = useContext(UserContext);

    useEffect(()=>{
        getRestaurant();
    },[])

    async function getRestaurant(){
        const restaurantData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3278298&lng=78.0325594&page_type=DESKTOP_WEB_LISTING"); 
        const json = await restaurantData.json();
       // console.log(json)
       setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
       setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    
    const onLine = useIsOnline();
    if(!onLine){
        return <h1>offine</h1>;
    }

    // conditional rendering
    // restaturant is empty - load schimmer ui
    // restaurant has some data - load actual data ui

    if(!allRestaurants) return null  // Early return :- not render component

    if(restaurants?.length===0) return <h1>No restaturant Match</h1>

    return (allRestaurants?.length===0)?<Schimmer/>: (
        <>
        <div className="input p-5 bg-pink-400 my-5">
            <input onChange={(e)=>{setInputText(e.target.value)}} 
                type="text" value={inputText} placeholder="search" 
            />    
            

            <button className="mx-3 py-0 px-2 text-white rounded bg-purple-600" onClick={()=>{
                const data = filterData(inputText,allRestaurants);
                setRestaurants(data);
            }}> 
                search
            </button> 

            <input onChange={(e)=>{
                setUser({name:e.target.value,email:"newemail@gmail.com"})
            }}></input>
            
        </div>
        
        <div className="cards flex flex-wrap">
            { /* logic if no restaturants found */}          
            {restaurants.map((restaurant)=>{ 
                return(
                    <Link to={   "/restaurant/"+restaurant.data.id}  key={restaurant.data.id}>
                        {/*console.log(restaurant.data.id) */}
                        <RestaurantCard {...restaurant.data} />
                    </Link>
                )
            })}
        </div>
        </>
    )
}

export default Body;  // b372f03cac692917d30d9d7b60f5ec8d