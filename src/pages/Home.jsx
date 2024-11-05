import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import ProductCart from "../components/ProductCart";

function Home() {
  const categoriesData = useLoaderData();
  const navigate = useNavigate()
  return (
    <div className="">
      <Banner />
      <p className="md:mt-56 mt-64 text-4xl font-bold text-center ">
        {" "}
        Explore Cutting-Edge Gadgets
      </p>
      <div className="grid md:grid-cols-6">
        <div className="md:col-span-1"> 

          <button className="bg-white  text-black border border-black px-4 py-2 lg::w-48 md:w-36   w-full p-5 rounded transition-transform transform hover:scale-105 hover:bg-gray-200" onClick={()=>navigate('/')}>All</button>
             <br />
             <br />
       
             <Categories categories={categoriesData}/>
             
             </div>
        <div className="md:col-span-5"> <Outlet/></div>
     

      </div>

  
    </div>
  );
}

export default Home;
