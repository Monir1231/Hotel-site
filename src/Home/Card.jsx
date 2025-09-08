import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { CardAlldata } from "../CardData";

const HostelCard = () => {
  const [currentIndex, setcurrentIndex] = useState(0);
  const [maxvisible, setmaxvisible] = useState(4);

  useEffect(() => {
    const updateCardsToshow = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setmaxvisible(1);
      } else if (width < 1024) {
        setmaxvisible(2);
      } else {
        setmaxvisible(4);
      }
    };

    updateCardsToshow();
    window.addEventListener("resize", updateCardsToshow);
    return () => window.removeEventListener("resize", updateCardsToshow);
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setcurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + maxvisible < CardAlldata.length) {
      setcurrentIndex(currentIndex + 1);
    }
  };

  const visiblecards = CardAlldata.slice(
    currentIndex,
    currentIndex + maxvisible
  );

  return (
    <div className="w-[92%] mx-auto lg:mt-28 md:mt-20 mt-14 bg-[#1677BD] rounded-md px-6 py-10 relative">
      <h4 className="lg:text-[32px] md:text-2xl text-xl text-white pt-4 pb-10">
        Find the best restaurant ratings below
      </h4>

      <div
        className={`grid items-center gap-6
          ${maxvisible === 1 ? "grid-cols-1" : ""}
          ${maxvisible === 2 ? "grid-cols-2" : ""}
          ${maxvisible === 4 ? "xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1" : ""}
        `}
      >
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute -left-4 -mt-10 transform translate-x-6 flex items-center justify-center text-black bg-white/95 rounded-full w-9 h-9 z-10 hover:bg-white/60 duration-300 transition-all"
        >
          <FaArrowLeft />
        </button>

        {visiblecards.map((item, index) => (
          <div key={index} className="text-white bg-white rounded-lg">
            <img className="w-full" src={item.img} alt={item.title} />
            <div className="p-2">
              <h4 className="text-[19px] text-black font-semibold py-2">
                {item.title}
              </h4>
              <p className="text-[#8F8F8F] text-sm">{item.desc}</p>

              <div className="flex items-center justify-between pt-4 pb-2">
                <div className="flex items-center gap-2 text-sm text-black">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src={item.star}
                      alt="star"
                      className="w-4 h-4"
                    />
                  ))}
                </div>
                <p className="text-black text-sm font-semibold">
                  {item.reviews}
                </p>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={handleNext}
          disabled={currentIndex + maxvisible >= CardAlldata.length}
          className="absolute right-8 -mt-10 transform translate-x-6 flex items-center justify-center text-black bg-white/95 rounded-full w-9 h-9 z-10 hover:bg-white/60 duration-300 transition-all"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default HostelCard;
