import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
const useRestaurentMenu=(resId)=>{
  
    const [resINFO,setResINFO]=useState(null);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=async ()=>{
        const data=await fetch(MENU_API+resId);
        const json =await data.json();
      setResINFO(json.data);
    }
    
    return resINFO;
}
export default useRestaurentMenu
