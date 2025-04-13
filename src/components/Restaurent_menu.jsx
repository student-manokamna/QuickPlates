import {useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurentMenu=()=>{
  
   const dummy="dummy data";
    const {resId}=useParams(); 
    const resINFO=useRestaurentMenu(resId)   
    const [showIndex,setShowIndex]=useState(null);
 
    if(resINFO===null) return <Shimmer/>
    console.log("end")
    console.log(resINFO)
    const {name,cuisines,cloudinaryImageId,costForTwoMessage}=resINFO?.cards[2]?.card?.card?.info;// ye shirt form hh ab sidha name likh sktre hh
    const {itemCards}=resINFO?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    
     const categories=resINFO?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
     //upar wali line pura jaise rs 99 deal of day rs 139 deal of day sare aa jayege
    //  console.log("by2")
    //  console.log(categories)// ye veg vale ko chod kr baki type match krega
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl" >{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(',')}-{costForTwoMessage}</p>
            {/* categories accordian */}
            {categories.map((category,index)=>(
            //controlled component
            <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card} showitems={category?.card?.card.title===showIndex}
            setShowIndex={setShowIndex} dummy={dummy}
            />))}
          
        </div>
    );
};
export default RestaurentMenu;
