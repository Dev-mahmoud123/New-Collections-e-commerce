import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    carts: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.carts[itemIndex].cartQuantity += 1;
        toast.info(`Increased ${state.carts[itemIndex].title} Quantity`, {
          position: "bottom-left",
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.carts.push(tempProduct);
        toast.success(`${action.payload.title} added to cart`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.carts));
    },
    removeFromCart(state, action) {
      const nextCartItems = state.carts.filter(
        (item) => item.id !== action.payload.id
      );
      toast.error(`${action.payload.title} removed from cart`, {
        position: "bottom-left",
      });
      state.carts = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.carts));
    },
    increaseQuantity(state, action) {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      state.carts[itemIndex].cartQuantity += 1;
      toast.info(`Increase ${state.carts[itemIndex].title} cart quantity `, {
        position: "bottom-left",
      });
    },
    decreaseQuantity(state, action) {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.carts[itemIndex].cartQuantity > 1) {
        state.carts[itemIndex].cartQuantity -= 1;
        toast.info(`Decrease ${state.carts[itemIndex].title} cart quantity `, {
          position: "bottom-left",
        });
      } else if (state.carts[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.carts.filter(
          (item) => item.id !== action.payload.id
        );
        toast.error(`${action.payload.title} removed from cart`, {
          position: "bottom-left",
        });
        state.carts = nextCartItems;
        localStorage.setItem("cartItems", JSON.stringify(state.carts));
      }
    },
    clearCart(state, action) {
      state.carts = [];
      toast.error(`remove all from cart`, {
        position: "bottom-left",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.carts));
    },
    getTotal(state, action) {
      let { quantity, total } = state.carts.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  getTotal
} = cartSlice.actions;
export default cartSlice.reducer;
