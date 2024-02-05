import "./productCard/productCard.css";
import Adminproductcard from "./productCard/productCard";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Adminproducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      console.log("kousaa");
      const response = await axios.get(`http://localhost:8081/products`);
      const data = response.data;
      setProducts(data);
      console.log(data)
    } catch (error) {
      console.log(error);
      setProducts(null);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <> <div className="welcome">Welcome</div>
      <div className="admin-product-container">
      {products && products.length > 0 ? (
        products.map((product) => (
            <Adminproductcard key={product._id} data={product} />
        ))
        ) : (
        <p className="DisplayAll-Title text-center">No Products available</p>
        )}
      </div>
    </>
  );
};

export default Adminproducts;
