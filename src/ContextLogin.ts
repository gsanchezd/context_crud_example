import { createContext } from "react";
const ContextLogin = createContext({
  isLogin: false
  // logIn: (username, cb) => {},
  // logOut: () => {},
});
export default ContextLogin;

