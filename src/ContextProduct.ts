import { createContext } from "react";

export type ProductType = {
  id: number,
  name: string
}

export type ContextProductType = {
  products: ProductType[];
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