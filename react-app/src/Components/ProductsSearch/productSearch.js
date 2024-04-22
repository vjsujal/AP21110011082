import React, { useState, useEffect } from "react";

// import "../HomePage/homepage.css";
import { Link } from "react-router-dom";

import axios from 'axios';

const getProducts = async () => {
  try {
    const response = await axios.post(
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMTYwNTUzLCJpYXQiOjE3MTIxNjAyNTMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjQzZmIwOTk2LWRlZDktNDcyZS05MGMzLTI2MDAyMzFhYWUxYiIsInN1YiI6InZpamF5dmFyZ2l5YV9zQHNybWFwLmVkdS5pbiJ9LCJjb21wYW55TmFtZSI6ImdvU3VqYWwiLCJjbGllbnRJRCI6IjQzZmIwOTk2LWRlZDktNDcyZS05MGMzLTI2MDAyMzFhYWUxYiIsImNsaWVudFNlY3JldCI6Im1idmx6SXFJb09Bd3FMR2UiLCJvd25lck5hbWUiOiJTdWphbCBWaWpheXZhcmdpeWEiLCJvd25lckVtYWlsIjoidmlqYXl2YXJnaXlhX3NAc3JtYXAuZWR1LmluIiwicm9sbE5vIjoiQVAyMTExMDAxMTA4MiJ9.eevBUsMmjKh1J1nNConA3Tqk6n0lfkx1Is7XmmxCd-s",
        },
        mode: 'cors'
      }
      
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error to handle it at the calling site
  }
};




export default function ProductSearch() {
  const [lst, setLst] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setLst(data);
      console.log(data);
    };

    fetchData();
  }, []);
  return (
    <div className="homepageProducts flex justify-between items-center ">
      <h1 className="text-2xl font-bold">Products</h1>
      <div className="products">    {lst.map((product) => (
        <Link className="text-link" to={`/productDetail/${product.id}`} key={product.id}>
          <div className="product border border-gray-300 rounded p-4">
            <img src={product.url} alt="product" className="w-full h-48 object-cover rounded" />
            <h3 className="mt-2 text-lg font-semibold" title={product.name}>
              {product.name.slice(0, 22)}...
            </h3>
            <div className="flex justify-between items-center mt-2">
              <p className="text-sm text-gray-600">
                ₹{product.price} <del>₹{product.og_price}</del>
              </p>
              <p className="text-sm text-gray-600">{product.discount}%</p>
            </div>
          </div>
        </Link>
      ))}
      </div>
    </div>



  );
}