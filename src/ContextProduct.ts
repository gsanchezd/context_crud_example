import { createContext } from "react";

export type ContextProductType = {
  products: string[];
  addProduct: (name: string) => void;
  removeProduct: (key: number) => void;
};

export const ContextProductDefaultValues: ContextProductType = {
  products: [], 
  addProduct: () => {},
  removeProduct: () => null
};

const ContextProduct = createContext<ContextProductType>(ContextProductDefaultValues);
export default ContextProduct