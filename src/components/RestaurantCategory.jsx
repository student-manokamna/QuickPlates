import { useState } from "react"
import ItemList from "./itemlist"

const  RestaurantCategory=({data,showitems,setShowIndex,dummy})=>{
   
    const handleclick=()=>{
        
        setShowIndex(previndex=>previndex===data.title?null:data.title);
        }

    return <div>
        {/* header */}
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer  " onClick={handleclick}>
        <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
        <span>^👌😘^</span>
        </div>
            {showitems && <ItemList items={data.itemCards} dummy={dummy}/>}
        </div>
        
        {/* accordian body */}
       

    </div>
}
export default RestaurantCategory