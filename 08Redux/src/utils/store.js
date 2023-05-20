import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./cartSlice";

const store = configureStore({reducer:{cart:cartSlice}});

export default store;


/*
create store
    configureStore() - RTK
provide store to application
    <Provider store={store}></Provider>  - RR
Slice 
    cartSlice = createSlice({  - RTK
        name:"",
        initialState:{
            items:[]
        },
        reducers:{
            addItem:(state,action)=>{
                state.items.push(action.payLoad)
            }
        }
    })  
    
    export const {addItem,clearCart} =  cartSlice.actions;
    export default cartSlice.reducer;

put that slice into store
    {
        reducer:{
            cart:cartSlice
        }
    }

*/