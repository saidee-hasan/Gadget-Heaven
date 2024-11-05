import { Link, useLoaderData } from "react-router-dom";

function Categories({ categories }) {

  return (
    <div className="space-y-7 ">
      {categories.map((p, idx) => (
        <div key={idx}>
          <Link to={`/category/${p.name}`}>   <button className="bg-white  text-black border border-black px-4 py-2 lg::w-48 md:w-36   w-full p-5 rounded transition-transform transform hover:scale-105 hover:bg-gray-200">
            {p.name }
          </button></Link>
       
        </div>
      ))}
    </div>
  );
}

export default Categories;
