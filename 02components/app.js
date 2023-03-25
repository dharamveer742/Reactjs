import React from "react";
import ReactDOM  from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

// react element 
 const h1 =(<h1>Heading1</h1>)

// components
// functional component and class component

const Title = ()=>(<h2>ReactJS</h2>)

 const H2 = ()=>{       
    return (                // react element inside functional component   // or {Title()}
        <div>
            <Title></Title> 
            {console.log("any piece of javascript code inside jsx")}
            {h1}  
            <h2>heading2</h2>
        </div>
    )   
 }

root.render(<H2/>);