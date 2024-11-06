import { useNavigate } from "react-router-dom";

export default function Card({ product }) {
  const { name, price, description, image } = product || {};
  const navigate = useNavigate();

  const handleCart = (e) => {
    console.log(product); // Log the product for debugging
    // You can add more logic here to handle adding the product to the cart
  };

  const handleViewMore = () => {
    handleCart(); // Call handleCart to perform its logic
    navigate(`/card/${name}`); // Navigate to the homepage
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto bg-white m-4">
       <img className="w-full h-52 object-cover" src={image} alt={name} />
  
      <div className="px-6 py-4">
        <h1 className="font-bold text-xl mb-2">{name}</h1>
        <p className="text-gray-700 text-base mb-2">{description}</p>
        <p className="text-gray-900 font-semibold text-lg">${price.toFixed(2)}</p>
        <button 
          onClick={handleViewMore} 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
     View Details
        </button>
      </div>
    </div>
  );
}