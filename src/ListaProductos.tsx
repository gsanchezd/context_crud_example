import React, { useContext } from 'react'
import ContextProduct from './ContextProduct'

const ListaProductos = () => {
  const contextProduct = useContext(ContextProduct)
  const data = contextProduct.products
  return (
    <div>
      {data.map((p) => <li> {p} <button onClick={(e) => contextProduct.removeProduct(1)}> x </button> </li>)}  
    </div>
  )
}

export default ListaProductos
