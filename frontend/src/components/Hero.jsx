import React from "react";
import albumin from "../assets/human-albumin.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      {/* hero left  */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BEST SELLER</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <Link
              to="/collections"
              className="font-semibold text-sm md:text-base text-blue-800"
            >
              SEARCH NOW
            </Link>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* hero right */}
      <img src={albumin} alt="" className="w-full sm:w-1/2" />
    </div>
  );
};

export default Hero;
