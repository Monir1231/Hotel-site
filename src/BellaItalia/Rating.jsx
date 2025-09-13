import React from "react";

import { Linedata } from "../CardData";
import { MyRatdata } from "../CardData";
const MyRating = () => {
  return (
    <section className="lg:w-[80%] w-[90%] mx-auto xl:pt-40 md:pt-14 pt-11 text-center lg:text-start">
      <div className="flex flex-col lg:flex-row lg:justify-between justify-center items-center lg:gap-3 gap-6  border-b-1 border-t-1 border-[#DCDCDC] lg:py-14 py-6">
        {/* left */}
        <div className="lg:w-[35%] w-full">
          {MyRatdata.map((item, index) => (
            <div key={index}>
              <div className="flex  gap-3">
                <div>
                  <img className="w-fit" src={item.Logo} />
                </div>
                <div>
                  <h2 className="text-[32px] font-bold">{item.title}</h2>
                  <p className="lg:text-[19px] text-[#838383] text-base ">
                    {item.reviews}
                  </p>
                  <div className="flex items-center gap-1.5 mt-6">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        src={item.star}
                        alt="star"
                        className="w-4 h-4 lg:size-5 "
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* right */}
        <div className="lg:w-[65%] w-full">
          {Linedata.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center lg:justify-normal gap-3 py-1"
            >
              <p className="lg:text-[17px] text-sm">{item.lineText}</p>
              <img className="lg:w-fit w-[280px]" src={item.lineimg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyRating;
