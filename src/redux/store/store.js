import { configureStore } from "@reduxjs/toolkit";
import cart from "../reducers/cartReducer"

export const store = configureStore({
      reducer:{
            cart
      }
})