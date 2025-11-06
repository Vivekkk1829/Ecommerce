import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartItems: [],
  isLoading: false,
};

export const addToCart = createAsyncThunk(
  "/cart/addToCart",
  async ({ userId, productId, quantity }) => {
    const resoponse = await axios.post(
      "http://localhost:5000/api/shop/cart/add",
      {
        userId,
        productId,
        quantity,
      }
    );

    return resoponse.data;
  }
);
export const fetchCartItems = createAsyncThunk(
  "/cart/fetchCartItems",
  async ({ userId }) => {
    const resoponse = await axios.get(
      `http://localhost:5000/api/shop/cart/get/${userId}`
    );

    return resoponse.data;
  }
);
export const deleteCartItem = createAsyncThunk(
  "/cart/deleteCartItem",
  async ({ userId, productId }) => {
    const resoponse = await axios.delete(
      `http://localhost:5000/api/shop/cart/${userId}/${productId}`,
      {
        userId,
        productId,
      }
    );

    return resoponse.data;
  }
);
export const updateCartQuantity = createAsyncThunk(
  "/cart/updateCartQuantity",
  async ({ userId, productId, quantity }) => {
    const resoponse = await axios.put(
      "http://localhost:5000/api/shop/cart/update-cart",
      {
        userId,
        productId,
        quantity,
      }
    );

    return resoponse.data;
  }
);
const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToCart.pending,(state)=>{
        state.isLoading=true
    }).addCase(addToCart.rejected,(state)=>{
        state.isLoading=false,
        state.cartItems=[]
    }).addCase(addToCart.fulfilled,(state,action)=>{
        state.isLoading=false,
        state.cartItems=action.payload.data
    }).addCase(fetchCartItems.pending,(state)=>{
        state.isLoading=true
    }).addCase(fetchCartItems.rejected,(state)=>{
        state.isLoading=false,
        state.cartItems=[]
    }).addCase(fetchCartItems.fulfilled,(state,action)=>{
        state.isLoading=false,
        state.cartItems=action.payload.data
    }).addCase(deleteCartItem.pending,(state)=>{
        state.isLoading=true
    }).addCase(deleteCartItem.rejected,(state)=>{
        state.isLoading=false,
        state.cartItems=[]
    }).addCase(deleteCartItem.fulfilled,(state,action)=>{
        state.isLoading=false,
        state.cartItems=action.payload.data
    }).addCase(updateCartQuantity.pending,(state)=>{
        state.isLoading=true
    }).addCase(updateCartQuantity.rejected,(state)=>{
        state.isLoading=false,
        state.cartItems=[]
    }).addCase(updateCartQuantity.fulfilled,(state,action)=>{
        state.isLoading=false,
        state.cartItems=action.payload.data
    });
    
  },
});

export default shoppingCartSlice.reducer