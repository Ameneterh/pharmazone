import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import NewsLetterBox from "../components/NewsLetterBox";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <NewsLetterBox />
    </div>
  );
};

export default HomePage;
