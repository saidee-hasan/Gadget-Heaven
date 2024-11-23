import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import ProductCart from "../components/ProductCart";
import { getStoreRedList } from "../utils/addToDb";

function Home() {

  document.title = "Home | Gadget Heaven"
  const categoriesData = useLoaderData();
  const navigate = useNavigate();




  return (

    <>

    <div className="lg:container mx-auto px-4 ">


      <Banner />
      <h1 className="md:mt-56 mt-64 text-4xl font-bold text-center text-gray-800">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="grid md:grid-cols-6  gap-4 mt-8">
        <div className="lg:col-span-1  bg-slate-200 rounded-xl p-4">
        
        
          <button
            className="bg-white  text-black border border-black px-4 py-2   w-full p-5 rounded transition-transform transform hover:scale-105 hover:bg-gray-200"
            onClick={() => navigate("/")}
          >
            All
          </button>


          <div className="mt-4">
            {categoriesData.length > 0 ? (
              <Categories categories={categoriesData} />
            ) : (
              <p className="text-center text-gray-600">No categories available</p>
            )}
          </div>
        </div>
        <div className="md:col-span-5 ">
          <Outlet />
        </div>
      </div>
    </div>    </>
  );
}

export default Home;