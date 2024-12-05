import { createContext } from "react";
import { products } from "../assets/assets";
import { FaNairaSign } from "react-icons/fa6";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = <FaNairaSign />;
  const delivery_fee = 5000;

  const value = {
    products,
    currency,
    delivery_fee,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
