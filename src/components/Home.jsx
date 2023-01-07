import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTotal } from "../redux/reducers/cartReducer";
import Products from "./Products";
import Slider from "./Slider";

function Home() {
  const [isOnline, setOnline] = useState(navigator.onLine);
  const dispatch = useDispatch();

  const handleStateChange = () => {
    setOnline(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleStateChange);
    window.addEventListener("offline", handleStateChange);
    dispatch(getTotal());
    return () => {
      //  clean that for performance improvement
      window.removeEventListener("online", handleStateChange);
      window.removeEventListener("offline", handleStateChange);
    };
  }, [isOnline , dispatch]);

  const NoInternet = () => {
    return (
      <div className="col">
        <h2>OOPS</h2>
        <p>There is no internet connection</p>
      </div>
    );
  };

  return (
    <div className="container home">
      <Slider />
      {isOnline ? <Products /> : <NoInternet />}
    </div>
  );
}

export default Home;
