import React from "react";
import UserContext from "../utils/userContext";
import { Outlet } from "react-router-dom";
import ClassComponentProfile from "./profileClassComponent" ;
import ClassComponentThirdChild from "./classComponentThirdChild";


/*const About =  ()=>{
    return (
        <>
        <h1>About us</h1>
        <Outlet></Outlet>
        <ClassComponentProfile type={"classBased"} />
        </>
    )
}
export default About; */

class classComponentAbout extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent constructor")
    }
    componentDidMount(){
        console.log("prent componentDidMount");
       this.timer =  setInterval(()=>{
            console.log("Hello");
        },1000)

        
    }
    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("componentWillUnmount");
    }
    render(){
        console.log("parent render")
        return (
            <>
            <h1>About us</h1>
            
            <Outlet></Outlet>
            <ClassComponentProfile type={"classBased"} name={"first child"} />
            <ClassComponentProfile type={"classBased"} name={"second child"} />
            <ClassComponentThirdChild name={"third child"} ></ClassComponentThirdChild>
            <UserContext.Consumer>
                {(user)=><h1>{user.name}</h1>}
            </UserContext.Consumer>
            </>
        )
    }
}

export default classComponentAbout;