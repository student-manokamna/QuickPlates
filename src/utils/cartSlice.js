import { createSlice, current } from "@reduxjs/toolkit";
// is ke andr action in  reducer function ayenge 
//action are aoi to commmunicate with redusstore 
const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    //reducer functions  
    reducers:{ // contain multiple reducer function 
        addItems:(state,action)=>{
          
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state,action)=>{
          
            console.log(current(state));
            state.items.length=0; 
        }
    }
})

export const {addItems,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer; 
