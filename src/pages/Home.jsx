import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";

function Home() {
  const categoriesData = useLoaderData();
  return (
    <div>
      <Banner />
      <p className="md:mt-56 mt-64 text-4xl font-bold text-center ">
        {" "}
        Explore Cutting-Edge Gadgets
      </p>
      <Categories categories={categoriesData}/>
    </div>
  );
}

export default Home;
