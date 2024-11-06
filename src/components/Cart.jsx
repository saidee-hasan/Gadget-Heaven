import React, { useState } from 'react';

function Cart({ cart, onRemove }) {
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
    <div className="max-w-4xl mx-auto p-5">
      <h2 className="text-2xl font-bold mb-4">Your Shopping Cart</h2>
      
      {cart.length > 0 && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg grid grid-cols-2 ">
            <div className="flex">      <h3 className="text-lg font-bold">Total Price:</h3>
            <p className="text-xl font-semibold text-green-600">${totalPrice.toFixed(2)}</p></div>
    
          <button 
            onClick={toggleSortOrder} 
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Sort by Price: {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
          </button>
        </div>
      )}

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
                <button 
                  onClick={() => onRemove(item.id)} 
                  className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Cart;