import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getStoreRedList, removeFromStoreRedList } from '../utils/addToDb';
import DashboardContainer from '../components/DashboardContainer';
import Cart from '../components/Cart';
import Wishlist from '../components/Wishlist';

function Dashboard() {
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

     
 const [isActive, setIsActive] = useState({
  cart: true,

  status: "cart",
});
const handleIsActive = (status) => {
  setIsActive({
    cart: status === "cart",

    status: status === "cart" ? "active" : "wishlist",
  });
};



  return (
   <>
   <DashboardContainer handleIsActive={handleIsActive} isActive={isActive}/>

   {isActive.cart ? (
        <Cart cart={cart} handleRemove={handleRemove}  />
      ) : (
        <Wishlist/>
      )}


   </>
  )
}

export default Dashboard
