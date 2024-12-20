import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestSeller);
    setBestSeller(bestProduct.slice(0, 5));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"best"} text2={"sellers"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-blue-800">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
          sapiente officiis provident ratione repudiandae, numquam adipisci
          corporis? Veniam minus culpa ad, vel, quo consequuntur vero, totam
          praesentium deleniti error ipsa.
        </p>
      </div>

      {/* render best sellers */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-5">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
