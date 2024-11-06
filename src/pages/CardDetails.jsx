import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreRedList } from "../utils/addToDb";


function CardDetails() {
  const { id } = useParams();
  const data = useLoaderData();
  const [productData, setProductData] = useState({});

  useEffect(() => {
    const singleData = data.find((p) => p.name === id); // Use strict equality for comparison
    setProductData(singleData || {}); // Set product data or an empty object
  }, [data, id]); // Added dependencies for useEffect

  const { name, price, description, image } = productData || {};

 


  const addToCart = (item) => {

 addToStoreRedList(item.id)

  };
 


  return (
    <div className="relative h-[600px]">

<div className="absolute md:w-auto w-full mt-44 left-1/2 transform -translate-x-1/2 bg-slate-50 border-8 border-gray-100 rounded-lg shadow-lg">
        {/* Card */}
        <div className="md:flex p-4">
          <img
            src={ "https://i.ibb.co.com/Ch83ywK/download.jpg"} // Fallback image if image is not available
            alt={name}
            className="md:w-1/2 w-full h-48 object-cover rounded-lg md:rounded-l-lg"
            style={{ objectPosition: "top center" }} // Start the image from the top center
          />
          <div className="md:ml-4 flex flex-col justify-center">
            <h1 className="text-2xl font-semibold">{name}</h1>
            <p className="text-gray-700 mt-2">{description}</p>
            <p className="text-xl font-bold mt-4">${price}</p>
            <button onClick={()=>addToCart(productData)} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
              Add To Cart
            </button>
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