import { Link, useLocation } from "react-router-dom";
import { getStoreRedList } from "../utils/addToDb";
import { CiShoppingCart } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";


function Navbar() {
  const location = useLocation();


  // Define colors based on the pathname

  const getBackgroundColor = () => {

    switch (location.pathname) {

      case '/':

        return 'bg-green-200  rounded-t-2xl';

      case '/dashboard':

        return 'bg-white';


      default:

        return 'bg-white';

    }
   
  };
  const cartLength = getStoreRedList()
  
  return (
    <div className={`${getBackgroundColor()} shadow-md fixed mt-0 w-full z-50`}>
      <div className="container mx-auto px-4">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-56 shadow-lg"
              >
                <li>
                  <Link to="/" className="hover:bg-green-200">Home</Link>
                </li>
                <li>
                  <a className="hover:bg-green-200">Statistics</a>
                </li>
                <li>
                  <Link to="/dashboard" className="hover:bg-green-200">Dashboard</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:bg-green-200">About</Link>
                </li>
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost text-xl text-black">Gadget Heaven</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/" className="hover:bg-green-200 rounded px-3 py-2">Home</Link>
              </li>
             
              <li>
              <Link className="hover:bg-green-200 rounded px-3 py-2" to={'/statistics'}>Statistics</Link>
   
              </li>
              <li>
                <Link to="/dashboard" className="hover:bg-green-200 rounded px-3 py-2">Dashboard</Link>
              </li>
              <li>
                  <Link to="/about" className="hover:bg-green-200">About</Link>
                </li>
            </ul>
          </div>
          <div className="navbar-end flex gap-3">
          <p style={{ fontSize: '24px' }}> <CiShoppingCart /></p>

<p style={{ fontSize: '24px' }}><MdFavoriteBorder /></p>
        
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;