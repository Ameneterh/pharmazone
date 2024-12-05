import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import { FaAngleDown } from "react-icons/fa6";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collections = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS{" "}
          <FaAngleDown
            className={`sm:hidden ${showFilter ? "-rotate-90" : ""}`}
          />
        </p>

        {/* category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"antiinfective"}
                onChange={toggleCategory}
              />
              Antiinfective
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"cardiology"}
                onChange={toggleCategory}
              />{" "}
              Cardiology
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"benzodiazepine"}
                onChange={toggleCategory}
              />{" "}
              Benzodiazepine
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"endocrinology"}
                onChange={toggleCategory}
              />{" "}
              Endocrinology
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"nephrology"}
                onChange={toggleCategory}
              />
              Nephrology
            </p>
          </div>
        </div>

        {/* category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">SUB CATEGORIES</p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"capsule"}
                onChange={toggleSubCategory}
              />
              Capsules
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"tablet"}
                onChange={toggleSubCategory}
              />{" "}
              Tablets
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"injection"}
                onChange={toggleSubCategory}
              />{" "}
              Injections
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"suspension-syrup"}
                onChange={toggleSubCategory}
              />{" "}
              Suspension/Syrup
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"suppository"}
                onChange={toggleCategory}
              />
              Suppositories
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"all"} text2={"collections"} />
          {/* products sort */}
          <select
            onClick={(e) => setSortType(e.target.value)}
            className="border border-gray-300 text-sm px-2 rounded"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="location">Sort by: Location</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* map products for display */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
