import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StatusCode from "../utils/StatusCode";
import axios from "axios";

const initialState= {
    data:[],
    status:StatusCode.IDLE
};

const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
    //  fetchProduct(state,action){
    //     state.data = action.payload
    //  },
     
    },
    extraReducers:(bulder) =>{
        bulder
         .addCase(getProduts.pending, (state) =>{
            state.status = StatusCode.LOADING
        })
        .addCase(getProduts.fulfilled, (state, action) =>{
            state.data = action.payload
            state.status =StatusCode.IDLE
        })
         .addCase(getProduts.rejected, (state) =>{
            state.status=StatusCode.ERROR
        })
    }
});
  
export const {fetchProdct} = productSlice.actions;

export default productSlice.reducer;
// Using middle ware calles asyncthunk
 export const  getProduts = createAsyncThunk("products/get", 
    async () =>{
     const  data = await  axios.get('https://fakestoreapi.com/products')
      const result =   data.data
      return result;
}
)

//  export function getProduts(){
//     return async  function getProductThunk(dispatch){
//         const  data = await   axios.get('https://fakestoreapi.com/products')
//       const result =   data.data
//       dispatch( fetchProduct(result))

//     }
//  }