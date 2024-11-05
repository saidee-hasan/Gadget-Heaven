import React from 'react'
import { useParams } from 'react-router-dom'

function ProductCart() {
    const {category} = useParams();
 
  return (
    <div>
     <h1 className="text-4xl">{category}</h1>
    </div>
  )
}

export default ProductCart
