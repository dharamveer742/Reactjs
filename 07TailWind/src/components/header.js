import {useState} from "react";
import { Link } from "react-router-dom";
import Instamart from "./instamart";
const LoggedIn = ()=>{
    // API caal for authentication
    return true;
}

const Header = ()=>{
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    return(
        <div className="flex justify-between bg-blue-100  shadow-lg sm:bg-violet-400">
           <a href="/"> <img className="h-28 pl-2" alt="logo" src="https://e0.pxfuel.com/wallpapers/174/289/desktop-wallpaper-printable-customizable-restaurant-logo-templates-food-logo.jpg"></img></a>
            <div className="navItems">
                <ul className="flex py-10 ">
                   <Link to="/"><li className="px-2">Home</li></Link>
                    <Link to="/about"><li className="px-2">About us</li></Link>
                    <li>cart</li>
                    <Link to="/Instamart"><li className="px-2">Instamart</li></Link>
                </ul>
            </div>
            {isLoggedIn?<button onClick={()=>{
                setIsLoggedIn(false);
            }}>LogOut</button>:<button onClick={()=>{
                setIsLoggedIn(true)}}>LogIn</button>}
            

        </div>
    )
  }

  export default Header;