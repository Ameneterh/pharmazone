import { createContext } from "react";
import { products } from "../assets/assets";
import { FaNairaSign } from "react-icons/fa6";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = <FaNairaSign />;
  const delivery_fee = 5000;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
