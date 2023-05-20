import { createContext } from "react";

const UserContext = createContext({
    name:"dummy",
    email:"dummy@gmail.com"
});

UserContext.displayName="UserContext";
export default UserContext;