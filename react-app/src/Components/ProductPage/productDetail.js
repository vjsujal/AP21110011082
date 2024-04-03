import React, { useEffect, useState } from "react";
import "./productDetail.css";
import { Link , useParams } from "react-router-dom";



const getProductInfo = async (productId) => {
  const response = await fetch("http://127.0.0.1:8000/viewItem", {
    method: "POST",
    body: JSON.stringify({ id: productId }),
  });
  const data = await response.json();
  return data;
};

export default function ProductDetail() {

  const { productId } = useParams();
  const [itemInfo, setItemInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const info = await getProductInfo(productId);
      setItemInfo(info);
    };

    fetchData();
  }, [productId]);

  // Render loading or handle when data is not available yet
  if (!itemInfo) {
    return (
      <div className="h-screen flex items-center justify-center" role="status">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  
  const returnStars = (rating) => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i} className="fa fa-star checked"></span>);
    }
    return stars;
  };

  let reviews = [
    {
      id: 1,
      name: "Stacy",
      date: "October 29, 2023",
      rating: 5,
      review: "This is a wonderful lightweight top... but it runs very small",
      likes: 2,
      dislikes: 0,
    },
    {
      id: 2,
      name: "Melissa",
      date: "November 18. 2023",
      rating: 5,
      review:
        "Form fitting in a flattering way. Fabric has a great feel. It is a bit sheer, so choose undergarments carefully. This can be a warm fall layer or a simple summer top",
      likes: 1,
      dislikes: 0,
    },
    {
      id: 3,
      name: "Josh",
      date: "October 24, 2023",
      rating: 5,
      review:
        "Fabulous, light weight, lux fabric. I love the style and fit. The estimated retail is way too high though.",
      likes: 1,
      dislikes: 0,
    },
  ];

  return (
    <div className="container">
      <div className="productImage">
        <img
          src={itemInfo.url}
          alt="product"
          width="300" // Fixed width for the image
          height="300" // Fixed height for the image
        />
      </div>
      <div className="productInfo">
        <h1>{itemInfo.name} ({itemInfo.id})</h1>
        <p>
        ₹{itemInfo.price}.00 <strike>₹{itemInfo.og_price}.00</strike>
        </p>
        <div className="size">
          <div className="sizeBox">XS</div>
          <div className="sizeBox">S</div>
          <div className="sizeBox">M</div>
          <div className="sizeBox">L</div>
          <div className="sizeBox">XL</div>
        </div>
          <Link to="/cart">
            <button className="addToCart">Add to Cart</button>
          </Link>
        <div className="productAttributes">
          <div className="boxes item0">
            <h1>Product Description</h1>
            <p>Crafted from a blend of lustrous 100% grade-6a mulberry silk and premium grade-a-16-gauge cashmere, this featherlight knit is a luxurious upgrade for beloved wardrobe staple</p>
          </div>
          <div className="boxes item1">
            <h1>4.1</h1>
            <p>Average Rating</p>
          </div>
          <div className="boxes item2">
            <h1>18</h1>
            <p>Reviews</p>
          </div>
          <div className="boxes item3">
            <h1>33%</h1>
            <p>5 Star</p>
          </div>
        </div>
        <div className="productReviews">
          {reviews.map((review) => (
            <div className="rating" key={review.id}>
              <h3>{review.name}</h3>
              <p>{review.date}</p>
              <div>{returnStars(review.rating)}</div>
              <h4>{review.review}</h4>
              <div className="likes">
                <i class="far fa-thumbs-up">
                  <span> {review.likes}</span>
                </i>
                <i class="far fa-thumbs-down">
                  <span> {review.dislikes}</span>
                </i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
