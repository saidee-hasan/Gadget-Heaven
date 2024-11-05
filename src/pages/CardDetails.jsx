import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom"

function CardDetails() {
    const {id}=useParams();
    const data = useLoaderData();
    const [productData,setProductData]=useState({});
    useEffect(()=>{
        const singleData = [...data].find(p=> p.name == id)

setProductData(singleData)
    },[])
    console.log(productData)
  return (
    <div>
      Hello   {productData.name}
      <p>{productData.description}</p>
    </div>
  )
}

export default CardDetails
