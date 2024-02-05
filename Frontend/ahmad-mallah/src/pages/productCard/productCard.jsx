import { React, useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";


const Adminproductcard = ({ data }) => {
  const [newData, setNewData] = useState(data);

  useEffect(() => {
    fetchProductData();
  }, [newData]);


   const fetchProductData = async () => {
    try {
       const response = await axios.get(`http://localhost:8081/products/${newData._id}`);
       setNewData(response.data);
    } catch (error) {
       console.error(error);
    }
   };

  return (
    <>
      <div className="Admin-product-card">
        <div className="card mb-3" key={newData._id}>
          <div
            className="card__img__container"
            style={{ width: "100%", height: "auto" }}
          >
            <Carousel controls={true} indicators={true} interval={null}>
              {newData.imageURLs
                .map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="card__img"
                    src={`http://localhost:8081/${image}`}
                    alt=""
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="card__descr-wrapper">
            <p className="card__title">Name : {newData.title}</p>
            <p className="card__Desc">Description : {newData.description}</p>
            <p className="card__title">Price : {newData.price}$</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Adminproductcard;