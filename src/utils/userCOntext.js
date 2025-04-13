import { createContext } from "react";


const UserContext=createContext({
    loggedInUser:"Deafult User",
})
export default UserContext;