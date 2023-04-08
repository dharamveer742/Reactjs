import React from "react";
import ReactDOM from "react-Dom/client"
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer"
import About from "./components/about"
import Error from "./components/error";
import Contact from "./components/contact"
import RestaurantMenu from "./components/restaurantMenu";
import Profile from "./components/profile";


import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";

const AppLayOut = ()=>{
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
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

