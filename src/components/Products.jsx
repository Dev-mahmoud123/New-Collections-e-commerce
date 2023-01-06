import React, { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CallApi from "../api/Api";


function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    return await CallApi(`products`, "GET", null).then((res) => {
      setData(res.data);
      setFilter(res.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    getProducts();
  }, []);

  const Loading = () => {
    return <Fragment>Loading......</Fragment>;
  };

  const ShowProducts = () => {
    return filter.map((product) => {
      return (
        <div className="col-sm-12 col-md-6 col-lg-3 mb-2" key={product.id}>
          <div className="card h-100 p-4 ">
            <img
              src={product.image}
              className="card-img-top w-100"
              style={{ width: "200px", height: "150px" }}
              alt={product.title}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title.substring(0, 10)}</h5>
              <p className="card-text lead fw-bold">${product.price}</p>
              <NavLink
                to={`/products/${product.id}`}
                className="btn btn-outline-dark"
              >
                Buy Now
              </NavLink>
            </div>
          </div>
        </div>
      );
    });
  };

  const filterProducts = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  return (
    <div className="container ">
      <div className="row">
        <div className="title my-3 py-2 border-bottom col-12">
          <h2>Latest Products</h2>
        </div>
      </div>
      <div className="category-btns my-2 py-2 d-flex flex-wrap justify-content-center">
        <button
          className="btn btn-outline-dark m-2"
          onClick={() => setFilter(data)}
        >
          All
        </button>
        <button
          className="btn btn-outline-dark m-2 "
          onClick={() => filterProducts("men's clothing")}
        >
          Men's Clothes
        </button>
        <button
          className="btn btn-outline-dark m-2"
          onClick={() => filterProducts("women's clothing")}
        >
          Women's Clothes
        </button>
        <button
          className="btn btn-outline-dark m-2"
          onClick={() => filterProducts("jewelery")}
        >
          Jewelry
        </button>
        <button
          className="btn btn-outline-dark m-2"
          onClick={() => filterProducts("electronics")}
        >
          Electronics
        </button>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
}

export default Products;
