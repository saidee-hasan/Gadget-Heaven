import { Link } from "react-router-dom";

function Categories({ categories }) {
  console.log(categories);
  return (
    <div className="space-y-7">
      {categories.map((p, idx) => (
        <div key={idx}>
          <Link to={`/category/${p.name}`}>   <button className="bg-white  text-black border border-black px-4 py-2 w-48 rounded transition-transform transform hover:scale-105 hover:bg-gray-200">
            {p.name}
          </button></Link>
       
        </div>
      ))}
    </div>
  );
}

export default Categories;
