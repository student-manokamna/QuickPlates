import { LOGO_URL } from "../utils/constants"
import { useEffect, useState,useContext } from "react";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userCOntext";
import { useSelector } from "react-redux";
const Header=()=>{
   let btnNAME="login";
   const [btnNAMEreact,setbtnNAMEreact]=useState("Login");
   const onlineStatus=useOnlineStatus();
   const {loggedInUser}=useContext(UserContext);

   useEffect(()=>{
   
   },[btnNAMEreact]) 
 
   const cartItems=useSelector((store)=>store.cart.items);

    return (
            <div className="flex flex-col sm:flex-row justify-between items-center bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-pink-100 mb-2 p-2 sm:p-4">
                <div className="logo-container mb-2 sm:mb-0">
                    <img className="w-32 sm:w-56 max-w-full h-auto" src={LOGO_URL} alt="Logo" />
                </div>
                <div className="flex items-center w-full sm:w-auto">
                    <ul className="flex flex-col sm:flex-row p-2 sm:p-4 m-2 sm:m-4 items-center w-full sm:w-auto">
                    <li className="px-4">
                        online staus:{onlineStatus?"🟢":"🔴"}
                    </li>
                    <li className="px-4 bg-green-300">
                    <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                    <Link to="/about">About</Link>
                    </li>
                    <li className="px-4  bg-green-300">
                        <Link to="/contact">contact-us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-bold text-xl">
                    <Link to="/cart">Cart-({cartItems.length})</Link>
                        </li>
                    <button className="login" onClick={()=>{
                        // btnNAMEreact="Logout"; not allowed
                      btnNAMEreact==="Login"?setbtnNAMEreact("Logout"):setbtnNAMEreact("Login");
                    // console.log(btnNAMEreact);

                    }}>{btnNAMEreact}</button> 
                    <li className="px-4 font-bold">{loggedInUser}</li>
                    
                </ul>
            </div>
        </div>
    )
}
export default Header