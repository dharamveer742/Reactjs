import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../constants";
import RestaurantCard from "../components/restaurantCard"
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{
    const dispatch = useDispatch();
    const handleItem=()=>{
        dispatch(clearCart());
    }
    const cartItems = useSelector(store=>store.cart.items);
    return(
        <>
        {cartItems.length!==0  && <button className="bg-red-400 p-2 m-2" onClick={()=>handleItem()}> clearCart </button>}
        <div className="cards flex flex-wrap">

            { /* logic if no restaturants found */} 

            {cartItems.map((item)=>{ 
                return(
                    <div key={item.id} className="card w-52  p-2 m-2 shadow-lg bg-violet-200 hover:bg-sky-700 ...">
                    <img src={IMG_CDN_URL+item.imageId}></img>
                    <h4 className="font-bold text-xl">{item.name}</h4>
                    <h4 className=" text-xl">Rs {item.price}</h4>
                    </div>
                )
                       
                   
            })}
        </div>
        </>
    )
}
export default Cart ;
