import React, { useState } from "react";
import ReactDOM from "react-Dom/client"
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer"
import About from "./components/about"
import Error from "./components/error";
import Contact from "./components/contact"
import RestaurantMenu from "./components/restaurantMenu";
import Profile from "./components/profile";
import {lazy,Suspense} from "react";
import Schimmer from "./components/schimmer";


// Bundle chunking 
// code splitting
// Dynamic loading
// lazy loading
// on demand loading

const Instamart = lazy( ()=>import("./components/instamart"));


import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";

import UserContext from "./utils/userContext"

const AppLayOut = ()=>{
    const[user,setUser]=useState({
        name:"Dharamveer",
        email:"Dharamveer45@gmail.com",    
    });
    return(
        <UserContext.Provider value={{user:user,setUser:setUser}}>
        <>
         
        <Header/>
        <Outlet/>
        <Footer/>
      
        </>
        </UserContext.Provider>
       
    )
}

// Routing :- clientSide
const appRouter =  createBrowserRouter([
    {
        path:"/",
        element:<AppLayOut/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About></About>,
                children:[
                    {
                        path:"profile",   // Nested Routing
                        element:<Profile/>
                    }
                ]
            },
            {
                path:"/contact",
                element:<Contact></Contact> ,  
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu></RestaurantMenu>
            } ,
            {
                path:"/Instamart",
                element:(<Suspense fallback={<Schimmer></Schimmer>}><Instamart/></Suspense>)
            } 
    ]
    },
    {
        path:"/about",
        element:<About></About>,
        errorElement:<Error/>
    },
]);



const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

