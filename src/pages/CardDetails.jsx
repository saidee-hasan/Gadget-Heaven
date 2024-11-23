import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToFavoriteList, addToStoreRedList } from "../utils/addToDb";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { MdOutlineFavoriteBorder } from "react-icons/md";

function CardDetails() {
  const { id } = useParams();
  const data = useLoaderData();
  const [productData, setProductData] = useState({});

  useEffect(() => {
    const singleData = data.find((p) => p.name === id); // Use strict equality for comparison
    setProductData(singleData || {}); // Set product data or an empty object
  }, [data, id]); // Added dependencies for useEffect

  const { name, price, description, image,slug } = productData || {};

 

  const addToCart = (item) => {

    handleToast("Product added to cart");
  
    addToStoreRedList(item.id); // Ensure this function is defined and works correctly
  
  };
  
  
  const handleToast = (message) => {
  
    toast(message, {
  
      position: "top-center",
  
      autoClose: 5000,
  
      hideProgressBar: false,
  
      closeOnClick: true,
  
      pauseOnHover: true,
  
      draggable: true,
  
      progress: undefined,
  
      theme: "light",
  
    });
  
  };
  
  
  const addToFavorite = (item) => {
  
    addToFavoriteList(item.id); // Ensure this function is defined and works correctly
  
    handleToast("Favorite added"); // Corrected the typo
  
  };
  return (
    <div className="relative h-[600px] mt-5">
   <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
<div className="absolute md:w-auto w-full mt-44 left-1/2 transform -translate-x-1/2 bg-slate-50 border-8 border-gray-100 rounded-lg shadow-lg">
        {/* Card */}
        <div className="md:flex p-4">
          <img
            src={ image} // Fallback image if image is not available
            alt={name}
            className="md:w-1/2 w-full h-72 object-cover rounded-lg md:rounded-l-lg"
            style={{ objectPosition: "top center" }} // Start the image from the top center
          />
         
          <div className="md:ml-4 flex flex-col justify-center">
            <h1 className="text-2xl font-semibold">{name}</h1>
            <p className="text-gray-700 mt-2">{description}</p>
            <p>Model : {slug}</p>
            <h3 className="font-bold">Rating ⭐ </h3>
            <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />


  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />

</div>
            <p className="text-xl font-bold mt-4">${price}</p>
            <div className="grid grid-cols-2">
            <button onClick={()=>addToCart(productData)} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
              Add To Cart
            </button>
            <button style={{ fontSize: '30px' }} className="mt-4 justify-center  bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={()=>addToFavorite(productData)} > 
            <div className="flex justify-center items-center">

<p className="text-center">

  <MdOutlineFavoriteBorder className="text-2xl" /> {/* You can adjust the size with text-* classes */}

</p>

</div>
            </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-green-300 h-80 flex flex-col  items-center">
        <h1 className="text-3xl font-bold">Product Details</h1>
        <p className="">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      
    </div>
  );
}

export default CardDetails;