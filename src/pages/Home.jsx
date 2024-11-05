import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import ProductCart from "../components/ProductCart";

function Home() {
  const categoriesData = useLoaderData();
  return (
    <div>
      <Banner />
      <p className="md:mt-56 mt-64 text-4xl font-bold text-center ">
        {" "}
        Explore Cutting-Edge Gadgets
      </p>
      <div className="grid grid-cols-4">
        <div className="col-span-1"> <Categories categories={categoriesData}/></div>
     
      <ProductCart/>
      </div>

  
    </div>
  );
}

export default Home;
