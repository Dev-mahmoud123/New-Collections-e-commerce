import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  clearCart,
  decreaseQuantity,
  getTotal,
  increaseQuantity,
  removeFromCart,
} from "../redux/reducers/cartReducer";

function Cart() {
  const product = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotal())
  }, [dispatch , product])
  

  const EmptyCart = () => {
    return (
      <div>
        <p>Your Cart Is Empty</p>
        <NavLink to="/products">
          <i class="fa-solid fa-arrow-left"></i>
          Start Shopping
        </NavLink>
      </div>
    );
  };

  const ShowCartItems = () => {
    return (
      <div className="cart">
        <div className="titles">
          <p>Description</p>
          <p>Quantity</p>
          <p>Price</p>
          <p>Remove</p>
        </div>
        {product.carts.map((item) => {
          return (
            <div className="cartItem" key={item.id}>
              <div className="description">
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
              </div>
              <div className="quantity">
                <button onClick={() => dispatch(increaseQuantity(item))}>+</button>
                <span>{item.cartQuantity}</span>
                <button onClick={() => dispatch(decreaseQuantity(item))}>-</button>
              </div>
              <div className="price fw-bold">
                ${item.cartQuantity * item.price}
              </div>
              <div className="remove">
                <button onClick={()=> dispatch(removeFromCart(item))}>x</button>
              </div>
            </div>
          );



        })}
        <div className="cart-summary mt-2 d-flex justify-content-between px-4 ">
           <button className="clear-cart" onClick={()=> dispatch(clearCart())}>CLear Cart</button>
           <div className="cart-check">
             <div className="subtotal">
               <span>Subtotal</span>
               <span>${product.cartTotalAmount}</span>
             </div>
             <p>Taxes and Shipping calculated at check out</p>
             <button>check out</button>
           </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container py-4">
      <h2>Shopping Cart</h2>
      {product.carts.length === 0 ? <EmptyCart /> : <ShowCartItems />}
    </div>
  );
}

export default Cart;
