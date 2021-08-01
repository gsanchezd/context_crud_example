import React, { useState } from "react";
import "./App.css";
import ContextLogin from "./ContextLogin";
import ContextProduct, {ContextProductDefaultValues } from "./ContextProduct";

import PrivateRoute from "./PrivateRouter";
import Dashboard from "./Dashboard";
import { BrowserRouter, Link, Switch } from "react-router-dom";
import ListaProductos from "./ListaProductos";

function App() {
  const [login, setLogin] = useState(true);
  const [products, setProducts] = useState<string[]>([
    "Producto 1",
    "Producto 2",
  ]);
  const addProduct = (productName: string) => {
    setProducts([productName, ...products])
  }
  const removeProduct = (i:number) => {
    console.log(i)
  }
  return (
    <BrowserRouter>
      <Link to="/dashboard"> Ir al dashboard </Link> |
      Logueado: {login ? " si" : "no"}

      <ContextLogin.Provider value={{ isLogin: login }}>
        <ContextProduct.Provider
          value={{
            products,
            addProduct,
            removeProduct
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
