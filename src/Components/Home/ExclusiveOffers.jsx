import React from "react";
import Title from "../Title";
import { assets } from "../../assets/assets";
import { exclusiveOffers } from "./../../assets/assets";

const ExclusiveOffers = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 md:my-16 my-11 lg:my-24">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <Title
          align="left"
          title="Exclusive Offers"
          subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
        ></Title>
        <button className="flex gap-4 items-center">
          View All Offers
          <img
            src={assets.arrowIcon}
            alt=""
            className="group-hover:translate-1 transition-all"
          />
        </button>
      </div>
      {/* ExclusiveOffers cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {exclusiveOffers.map((item) => (
          <div
            key={item._id}
            className="group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center "
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <p className="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full">
              {item.priceOff}% OFF
            </p>
            <div>
              <p className="text-2xl items-center gap-2 font-medium">{item.title}</p>
              <p>{item.description}</p>
              <p className="text-xs text-white/70 mt-3">Expires{item.expiryDate}</p>
            </div>
            <button className="flex
            cursor-pointer mt-4 gap-2 font-medium mb-5">View Offers  <img src={assets.arrowIcon} alt="" className="invert group-hover:translate-x-1 transition-all" /></button>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveOffers;
