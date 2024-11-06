import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getFavoriteList, removeFavoriteList } from "../utils/addToDb";
import Delete from "../assets/delete_12319540.png"

function Wishlist() {
  const data = useLoaderData();
  const [cart,setCart]=useState([])
  useEffect(()=>{
 const storedReadList = getFavoriteList();
 const storedReadListInt = storedReadList.map(id => parseInt(id));
 const addToCart = data.filter(cart=> storedReadListInt.includes(cart.id));
 setCart(addToCart)
 
 
 
  },[])

  const handleRemove =(id)=>{
    const remCart = cart.filter(bottle=> bottle.id !== id)
   setCart(remCart)
    removeFavoriteList(id)
  
  }
  console.log(cart)
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold">Wishlist </h1>
   <div className="space-y-6 mt-4">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500 ">Your cart is empty.</p>
        ) : (
          cart.map((item, idx) => (
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
                  className="mt-2  text-white px-4 py-2 rounded   transition-colors duration-300"
                >
               <img className="w-8" src={Delete} alt="" />
                </button>
            </div>
          ))
        )}
      </div>
    </div>
   
  )
}

export default Wishlist
