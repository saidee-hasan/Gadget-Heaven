import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { clearStoreRedList, getStoreRedList, removeFromStoreRedList } from '../utils/addToDb';
import DashboardContainer from '../components/DashboardContainer';
import Cart from '../components/Cart';
import Wishlist from '../components/Wishlist';

function Dashboard() {

     document.title="  Dashboard | Gadget Heaven"
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
   <DashboardContainer handleIsActive={handleIsActive} isActive={isActive} />

   {isActive.cart ? (
        <Cart  />
      ) : (
        <Wishlist/>
      )}


   </>
  )
}

export default Dashboard
