import { Fragment, useEffect, useState } from "react";
import React from "react";
import { NavLink, useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return <Fragment>Loading......</Fragment>;
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-sm-12 col-md-12 col-lg-6 my-3">
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%", height: "500px" }}
          />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 my-3 text-start">
          <div className="text-uppercase text-black-50">
            <h4>{product.category}</h4>
          </div>
          <h1>{product.title}</h1>
          <p className="lead">
            Rating {product.rating && product.rating.rate}
            <i className="fa-solid fa-star fs-6 ms-1"></i>
          </p>
          <h3 className="fw-bold display-6">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button className="btn btn-outline-dark">Add To Cart</button>
          <NavLink to="/cart" className="btn btn-dark ms-2">
            Go To Cart
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <div className="container py-2 ">
      <div className="row py-2">{loading ? <Loading /> : <ShowProduct />}</div>
    </div>
  );
}

export default Product;
