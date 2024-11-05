import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

function CardDetails() {
  const { id } = useParams();
  const data = useLoaderData();
  const [productData, setProductData] = useState({});
  useEffect(() => {
    const singleData = [...data].find((p) => p.name == id);

    setProductData(singleData);
  }, []);
  const { name, price, description, image } = productData || {};
  return (
    <div className="relative h-[600px]">
      <div className="absolute md:w-auto w-full mt-44 left-1/2 transform -translate-x-1/2  bg-slate-50 border-8 border-gray-100">
        {/* Card */}
        <div className="md:flex ">
          <img
          
            src={"https://i.ibb.co.com/rwjQm8x/download-1.jpg"}
            alt={name}
            className="mx-auto "
          />
          <div className="">
            <h1>{name}</h1>
            <p>
              {description}
            </p>
            <p>{price}</p>
          </div>
        </div>
      </div>
      <div className="text-center bg-green-300 h-80">
        <h1>Product Details</h1>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
      </div>

     
    </div>
  );
}

export default CardDetails;
