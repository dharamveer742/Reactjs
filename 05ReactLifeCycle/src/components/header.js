import {useState} from "react";
import { Link } from "react-router-dom";
const LoggedIn = ()=>{
    // API caal for authentication
    return true;
}

const Header = ()=>{
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    return(
        <div className="header">
           <a href="/"> <img alt="error" src="https://e0.pxfuel.com/wallpapers/174/289/desktop-wallpaper-printable-customizable-restaurant-logo-templates-food-logo.jpg"></img></a>
            <div className="navItems">
                <ul>
                   <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About us</li></Link>
                    <li>cart</li>
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