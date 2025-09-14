import React, { useState } from "react";
import { ReviewData } from "../CardData";

const Review = () => {
  const [visibleCurrentIndex, setVisibleCurrentIndex] = useState(5);

  const handleSeeMoro = () => {
    setVisibleCurrentIndex((pre) => pre + 3);
  };

  const visiblecards = ReviewData.slice(0, visibleCurrentIndex);
  const hasmore = visibleCurrentIndex < ReviewData.length;
  return (
    <section className="lg:w-[80%] w-[90%] mx-auto xl:pt-24 md:pt-14 pt-11 ">
      <div className="flex items-center gap-4 mb-12">
        <div className="flex items-center gap-1.5 border-1 rounded-full border-[#5E5E5E] w-fit py-2 px-5">
          <img src="sort.png" />
          <p className="text-[19px] font-semibold">Filter</p>
        </div>
        <div className="flex items-center gap-1.5 border-1 rounded-full border-[#5E5E5E] w-fit py-2 px-5">
          <img src="sort.png" />
          <p className="text-[19px] font-semibold">Sort</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {visiblecards.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 bg-[#F8F8F8] p-4 lg:p-5 rounded-md"
          >
            <div className="flex  gap-2.5">
              <div className="">
                <img
                  className=" py-3 px-3 bg-white rounded-full w-fit "
                  src={item.Logo}
                />
              </div>
              <div>
                <h2 className=" lg:text-[21px] md:text-lg text-base text-[#232323] font-semibold">
                  {item.title}
                </h2>
                <p className="lg:text-base md:text-sm text-[12px] text-[#8A8A8A] ">
                  {item.location}
                </p>
                <div className="flex items-center gap-2.5 mt-3 lg:mb-9 mb-6">
                  <div className="flex items-center gap-1.5  ">
                    {[...Array(5)].map((_, i) => (
                      <img key={i} src={item.star} className="size-4 " />
                    ))}
                  </div>
                  <p className="text-[#343434] text-sm">{item.date}</p>
                </div>

                <div>
                  <p className="lg:text-base md:text-sm text-[12px] text-[#5E5E5E] max-w-[511px] ">
                    {item.des}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {hasmore && (
        <div className="mt-14 text-center ">
          <button
            onClick={handleSeeMoro}
            className="bg-[#1677BD] py-2 px-4 rounded-full text-white"
          >
            Show more reviews
          </button>
        </div>
      )}
    </section>
  );
};

export default Review;
