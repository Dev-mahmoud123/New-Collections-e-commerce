import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../redux/actions/cartActions";

function Cart() {
  const dispatch = useDispatch();
  const product  = useSelector((state)=>state.cart);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const ShowCartItems = () => {
    return (
      <div className="card my-2">
        <div className="row">
          <div className="col-sm-12 col-md-4 ">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="col-sm-12 col-md-4 py-1">
            <h3>{product.title}</h3>
            <p className="lead fw-bold">
              {product.qty} x ${product.price} = ${product.qty * product.price}
            </p>
            <button className="btn btn-outline-dark me-2">
              <i className="fa fa-minus"></i>
            </button>
            <button className="btn btn-outline-dark">
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="container py-4">
      <ShowCartItems />
    </div>
  );
}

export default Cart;
