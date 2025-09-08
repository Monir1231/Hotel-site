import React, { useState } from "react";
import { latestCardData } from "./CardData";

const LatestCard = () => {

  const [visibleCurrentIndex, setVisibleCurrentIndex] = useState(4);

  const handleSeeMore = () =>{
    setVisibleCurrentIndex((preindex)=> preindex + 4)
  }
  

  const visiblecards = latestCardData.slice(0, visibleCurrentIndex)
  const hasmore = visibleCurrentIndex <latestCardData.length

  return (
    <div className=" w-[90%] mx-auto lg:my-10 md:my-20 my-14   rounded-md px-6 py-10">
      <div>
        <h4 className="lg:text-[32px] md:text-2xl text-xl text-[#1E1E1E] font-bold pt-4 pb-10">
          The latest trends
        </h4>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
        {visiblecards.map((item, index) => (
          <div key={index} className="text-white bg-[#F8F8F8] rounded-lg">
            <img className=" w-full" src={item.img} />
            <div className="p-2">
              <h4 className="text-[19px] text-black font-semibold py-2">
                {item.title}
              </h4>
              <p className="text-[#8F8F8F] text-sm">{item.desc}</p>

              <div className="flex items-center justify-between pt-4 pb-2 ">
                <div className="flex items-center gap-2  text-sm text-black">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src={item.star}
                      alt="star"
                      className="w-4 h-4"
                    />
                  ))}
                </div>
                <p className=" text-black text-sm font-samibold">
                  {item.reviews}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {hasmore && (
        <div className="text-center mt-12">
        <h4 className="text-[22px] font-semibold">
          Discover more cool restaurants
        </h4>
        <div>
          <button
            onClick={handleSeeMore}
            className=" bg-[#1677BD] text-white px-4 py-2 rounded-full mt-4"
          >
            See more
          </button>
        </div>
      </div>
      )}
    </div>
  );
};

export default LatestCard;




