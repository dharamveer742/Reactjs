import React from "react";
import ReactDOM from "react-Dom/client"
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer"



const AppLayOut = ()=>{
    return(
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    )
}

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut></AppLayOut>);

