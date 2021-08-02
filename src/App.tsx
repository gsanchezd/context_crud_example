import React, { useState } from "react";
import "./App.css";
import ContextLogin from "./ContextLogin";
import ContextProduct, {
  ContextProductDefaultValues,
  ProductType,
} from "./ContextProduct";

import PrivateRoute from "./PrivateRouter";
import Dashboard from "./Dashboard";
import { BrowserRouter, Link, Switch } from "react-router-dom";
import ListaProductos from "./ListaProductos";

function App() {
  const [login, setLogin] = useState(false);
  const initialProducts: Array<ProductType> = [
    { id: 1, name: "Producto 1" },
    { id: 2, name: "Producto 2" },
  ];

  const [products, setProducts] = useState(initialProducts);

  const addProduct = (productName: string) => {
    const uid = +new Date();
    const newProduct = { id: uid, name: productName };
    setProducts([newProduct, ...products]);
  };
  const removeProduct = (id: number) => {
    setProducts(products.filter((e) => (e.id !== id)));
  };

  return (
    <BrowserRouter>
      <Link to="/dashboard"> Ir al dashboard </Link> | Logueado:{" "}
      {login ? " si" : "no"}
      <ContextLogin.Provider value={{ isLogin: login }}>
        <ContextProduct.Provider
          value={{
            products,
            addProduct,
            removeProduct,
          }}
        >
          <ListaProductos />
          <button onClick={() => setLogin(true)}> Login </button>

          <Switch>
            <PrivateRoute component={Dashboard} path="/dashboard" />
          </Switch>
        </ContextProduct.Provider>
      </ContextLogin.Provider>
    </BrowserRouter>
  );
}

export default App;
