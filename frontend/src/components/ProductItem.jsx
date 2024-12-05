import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <div>
      <Link className="text-blue-700 cursor-pointer" to={`/product/${id}`}>
        <div className="overflow-hidden">
          <img
            src={image[0]}
            alt={name}
            className="hover:scale-110 transition ease-in-out h-40"
          />
        </div>
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="text-sm font-medium flex items-center">
          {currency}
          {price}
        </p>
      </Link>
    </div>
  );
};

export default ProductItem;
