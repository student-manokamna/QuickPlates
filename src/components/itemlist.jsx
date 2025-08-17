import { useDispatch } from "react-redux"
import { CDN_URL } from "../utils/constants.js"
import { addItems } from "../utils/cartSlice.js";

const ItemList=({items,dummy})=>{
 
    const dispatch=useDispatch();
    const handleAddItem=(item)=>{   
        dispatch(addItems(item))
    }
return  <div>
    {items.map((item)=>(
        <div data-testId="foodItems" key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex flex-col sm:flex-row justify-between items-center">
            <div className="w-full sm:w-9/12">
                <div className="py-2"> <span>{item.card.info.name}</span> <span>- ₹ {item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}
                </span></div>
                <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-full sm:w-3/12 p-2 sm:p-4 flex flex-col items-center">
                <button className="p-2 bg-black text-white shadow-lg rounded-lg my-2 sm:mx-16" onClick={()=>handleAddItem(item)}> ADD +</button>
                <img className="max-w-full h-auto rounded-lg" src={CDN_URL +item.card.info.imageId} alt={item.card.info.name} />
            </div>
        </div>
    ))}
</div>
}
export default ItemList 