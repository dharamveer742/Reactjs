import { Outlet } from "react-router-dom";

import ClassComponentProfile from "./profileClassComponent" ;
const About =  ()=>{
    return (
        <>
        <h1>About us</h1>
        <Outlet></Outlet>
        <ClassComponentProfile type={"classBased"} />
        </>
    )
}

export default About; 