import React from "react";
import "../css/porduct/product.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {  useParams, useNavigate } from 'react-router-dom';

const Product = () => {
  let { product_id } = useParams();
  const navigate = useNavigate();
  console.log("===productId===",product_id)
  const [productData, SetProductData] = useState([]);
  const [product, SetProduct] = useState({});
//   Get all products details
  const getProductsData = async () => {
    const result = await axios.get("https://dummyjson.com/products");
    SetProductData(result.data.products);
  };

  //   Get single product details
  const getProduct = async (product_id) => {
    const result = await axios.get(`https://dummyjson.com/products/${product_id}`);
    console.log("result===",result);
    SetProduct(result.data);
  };

  useEffect(() => {
    if(product_id){
        getProduct(product_id)
    }else{
        getProductsData();
    }
  }, [product_id]);

  return (
    <div>
      <h1>Products Details</h1>
      {!product_id ? (<div className="card-main-container">
        {productData.map((data) => (
          <div className="card_container" onClick={()=> navigate(`/products/${data.id}`)}>
            <div className="image_container">
              {data.images.map((image) => (
                <img className="image_blcok" href="#" src={image} />
              ))}
            </div>
            <div className="container">
              <div>
                {" "}
                <b>Title :</b> {data.title}
              </div>
              <div>
                {" "}
                <b>Description: </b> {data.description}
              </div>
            </div>
          </div>
        ))}
      </div> ) :(
       <div className="prodcut_container">
        <button className="btn_back" onClick={()=> navigate('/products')}>Back to Product</button>
         <div className="product_image_container">
         <h2>Images</h2>
          {product.images?.map((image) => (
                <img className="image_blcoks" href="#" src={image} />
              ))}
         </div>
         <div className="product_details">
            <p>Title : {product.title}</p>
            <p>Description : {product.description}</p>
            <p>Category : {product.category}</p>
            {/* <p>Price : {product.price}</p>
            <p>Discount Percentage : {product.discountPercentage} %</p>
            <p>Rating : {product.rating}</p>
            <p>Stock : {product.stock}</p>
            <p>Brand : {product.brand}</p>
            <p>Weight : {product.weight}</p>
            <p>WarrantyInformation : {product.warrantyInformation}</p>
            <p>WhippingInformation : {product.shippingInformation}</p>
            <p>AvailabilityStatus : {product.availabilityStatus}</p> */}
                <h2>Reviews</h2>
            <div className="product_review">
                {product.reviews?.map((review)=>(
                    <div className="review_block">
                        <p>Rating: {review.rating}</p>
                        <p>Comment: {review.comment}</p>
                        <p>Date: {review.date}</p>    
                        <p>Reviewer Name: {review.reviewerName}</p>
                        <p>Reviewer Email: {review.reviewerEmail}</p>
                    </div>
                  
                    

                ))}
            </div>
            <p>Return Policy : {product.returnPolicy}</p>
            <p>Minimum Order Quantity : {product.minimumOrderQuantity}</p>
         </div>
       </div>)}
    </div>
  );
};

export default Product;
