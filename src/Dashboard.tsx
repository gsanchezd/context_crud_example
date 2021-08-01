import React, { useContext, useState } from 'react'
import ContextProduct, {ContextProductDefaultValues } from "./ContextProduct";

const Dashboard = () => {
  const usedContextProduct = useContext(ContextProduct)
  const [productName, setProductName] = useState('')
  return (
    <div>
      <input onChange={(e) => setProductName(e.target.value)}></input>
      <button onClick={(e) => {usedContextProduct.addProduct(productName)}}> Añadir producto</button>
    </div>
  )
}

export default Dashboard