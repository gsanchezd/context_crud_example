import React, { useContext } from "react";
import ContextLogin from "./ContextLogin";
import ContextProduct from "./ContextProduct";

const ListaProductos = () => {
  const contextProduct = useContext(ContextProduct);
  const contextLogin = useContext(ContextLogin)
  const data = contextProduct.products;
  return (
    <div>
      {data.map((p) => (
        <li data-key={p.id}>
          {p.name}
          { contextLogin.isLogin &&
          <button onClick={(e) => contextProduct.removeProduct(p.id)}>
            x
          </button>
          }
        </li>
      ))}
    </div>
  );
};

export default ListaProductos;
