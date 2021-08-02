import React, { useState } from "react";
import "./App.css";
import ContextLogin from "./ContextLogin";
import ContextProduct, {
  ContextProductDefaultValues,
  ProductType,
} from "./ContextProduct";

import PrivateRoute from "./PrivateRouter";
import Dashboard from "./Dashboard";
import { BrowserRouter, Link, Switch, useHistory } from "react-router-dom";
import ListaProductos from "./ListaProductos";

function App() {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState('');
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

  const logMeIn = () => {
    if (username === "gonzalo")
      setLogin(true)
  }

  return (
    <BrowserRouter>

      <ContextLogin.Provider value={{ isLogin: login, logMeIn: logMeIn}}>
        <ContextProduct.Provider
          value={{
            products,
            addProduct,
            removeProduct,
          }}
        >
          {login && 
            <Link to="/dashboard"> Ir al dashboard </Link>

          }
          {!login && 
          <div className="loginForm">
            <input name="username" onChange={(e) => setUsername(e.target.value)} />
            <button onClick={() => logMeIn()}> Login </button>
          </div>
          }

          <ListaProductos />

          <Switch>
            <PrivateRoute component={Dashboard} path="/dashboard" />
          </Switch>
        </ContextProduct.Provider>
      </ContextLogin.Provider>
    </BrowserRouter>
  );
}

export default App;
