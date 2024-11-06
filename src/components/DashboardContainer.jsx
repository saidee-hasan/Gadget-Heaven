
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

function DashboardContainer({ handleIsActive ,isActive}) {



  return (
    <div>
      <div className='bg-green-200 h-auto p-8 text-center rounded-lg shadow-lg'>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h1>
        <p className="text-gray-600 mb-6">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => handleIsActive('cart')}
            className={`flex items-center px-4 py-2 rounded-lg transition duration-200 ${
              isActive.cart ? 'bg-green-600 text-white' : 'bg-slate-100 text-gray-800'
            } `}
          >
           <FaShoppingCart className="mr-2" /> Cart
          </button>
          <button
            onClick={() => handleIsActive('wishlist')}
            className={`flex items-center px-4 py-2 rounded-lg transition duration-200 ${
              isActive.cart ? 'bg-slate-100 text-gray-800' : ' bg-green-600 text-white'
            }`}
          >
            <FaHeart className="mr-2" /> Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardContainer;