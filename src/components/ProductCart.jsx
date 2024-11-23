import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

function ProductCart() {
  const { category } = useParams();
  const data = useLoaderData();

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    if (category) {
      const filterByCategory = [...data].filter((p) => p.category === category);
      setProducts(filterByCategory);
    } else {
      setProducts(data);
    }
  }, [category, data]);

  console.log(products);

  return (
    <div className="container mx-auto px-4">
    
      {products.length === 0 ? (
        <div className="text-center my-6">
          <p className="text-lg text-red-600">No products found in this category.</p>
          <p className="text-gray-600">Please check back later or try a different category.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {products.map((product, idx) => (
            <Card product={product} key={idx} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductCart;