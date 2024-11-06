import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { clearStoreRedList, getStoreRedList, removeFromStoreRedList } from '../utils/addToDb';
import Delete from"../assets/delete_12319540.png"
function Cart() {


 const data = useLoaderData();
 const [cart,setCart]=useState([])
 useEffect(()=>{
const storedReadList = getStoreRedList();
const storedReadListInt = storedReadList.map(id => parseInt(id));
const addToCart = data.filter(cart=> storedReadListInt.includes(cart.id));
setCart(addToCart)



 },[])

 const handleRemove =(id)=>{
  const remCart = cart.filter(bottle=> bottle.id !== id)
 setCart(remCart)
  removeFromStoreRedList(id)

}
const handleClear = () => {
  clearStoreRedList();
  setCart([]); // Clear the state as well
};






  // State to manage sorting order
  const [sortOrder, setSortOrder] = useState('asc');

  // Calculate the total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  // Function to sort the cart items by price
  const sortedCart = [...cart].sort((a, b) => {
    return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
  });

  // Toggle sort order
  const toggleSortOrder = () => {
    setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  return (

    <div className='container mx-auto'>
        <h2 className="text-2xl font-bold mb-4">Your Shopping Cart</h2>
      
   
      <div className="mt-6 p-4 bg-gray-100 rounded-lg  grid grid-cols-2 justify-between ">
          <div className="flex">      <h3 className="text-lg font-bold">Total Price:</h3>
          <p className="text-xl font-semibold text-green-600">${totalPrice.toFixed(2)}</p></div>
  <div className="flex justify-end items-end gap-5 ">
        <button 
          onClick={toggleSortOrder} 
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Sort by Price: {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
        </button>

        <button onClick={()=>handleClear()}  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
      >Purcess</button>
        </div>
      </div>
    <div className="max-w-4xl mx-auto p-5">
  
  

      <div className="space-y-6 mt-4">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          sortedCart.map((item, idx) => (
            <div key={idx} className="grid md:flex bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
              <img 
                className="mx-auto md:mx-0 md:justify-start w-32 h-32 object-cover rounded-md" 
                src={'https://i.ibb.co/Ch83ywK/download.jpg'} 
                alt={item.name} 
              />
              <div className="mt-4 md:mt-0 md:ml-4">
                <h1 className="text-xl font-semibold">{item.name}</h1>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-lg font-bold text-green-600">${item.price.toFixed(2)}</p>
              
              </div>
              <button 

      onClick={() => handleRemove(item.id)} 

      className="mt-2 flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"

      aria-label={`Remove ${item.name}`} // Accessibility improvement

    >

      <img className="w-6 h-6" src={Delete} alt="Delete" /> {/* Adjusted size for better alignment */}

    </button>
            </div>
          ))
        )}
      </div>
    </div>
    </div>
  );
}

export default Cart;