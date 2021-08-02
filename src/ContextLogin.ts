import { createContext } from "react";
const ContextLogin = createContext({
  isLogin: false,
  logMeIn: (username: string, cb: any) => {},
  // logOut: () => {},
});
export default ContextLogin;

