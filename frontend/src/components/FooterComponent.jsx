import React from "react";
import avatar from "../assets/pharmazone_logo.png";

const FooterComponent = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={avatar} alt="" className="mb-5 w-32 sm:w-44" />
          <p className="w-full md:w-2/3 text-blue-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            obcaecati vel accusamus odit amet perferendis reiciendis minima
            saepe facilis unde quos cumque inventore dicta quia alias quam a
            sint ducimus?
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-blue-700">
            <li>Home</li>
            <li>About</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-blue-700">
            <li>+2348154230654</li>
            <li>ameneterh@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024 pharmaZone Nig Ltd - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterComponent;
