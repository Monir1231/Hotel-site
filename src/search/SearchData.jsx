import React, { useState } from "react";
import { SearchCardData } from "../CardData";
import { useLocation } from "react-router-dom";

const SearchData = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";
  const loc = new URLSearchParams(location.search).get("loc") || "";

  // query + location filter

  const filtered = SearchCardData.filter((item) => {
    const matchQuery = item.title.toLowerCase().includes(query.toLowerCase());
    const matchLocation = loc
      ? item.title.toLowerCase().includes(loc.toLowerCase())
      : true;
    return matchQuery && matchLocation;
  });

  const [visibleCurrentIndex, setVisibleCurrentIndex] = useState(6);

  const handleSeeMore = () => {
    setVisibleCurrentIndex((pre) => pre + 6);
  };

  const visibleCards = filtered.slice(0, visibleCurrentIndex);
  const hasMore = visibleCurrentIndex < filtered.length;

  return (
    <section>
      <div className="flex flex-col xl:flex-row justify-between gap-10">
        {/* left */}
        <div className="xl:w-1/2 w-[90%] mx-auto xl:pl-10">
          <div>
            <p className="xl:text-base text-[#232323] md:text-sm text-[12px] my-2.5">
              Home / All restaurants
            </p>
            <div className="flex items-center justify-between gap-2">
              <h4 className="xl:text-[32px] md:text-2xl text-xl font-bold">
                Results for "{query}" {loc && `in ${loc}`}
              </h4>
            </div>
          </div>

          <div className="mt-10">
            {visibleCards.length > 0 ? (
              visibleCards.map((item, index) => (
                <div key={index} className="flex items-center gap-6 mb-10">
                  <div>
                    <img
                      className="xl:w-[200px] w-[180px]"
                      src={item.img}
                      alt={item.title}
                    />
                  </div>
                  <div>
                    <h2 className="xl:text-[22px] md:text-xl text-lg text-[#232323] font-bold">
                      {item.title}
                    </h2>
                    <p className="xl:text-sm text-[12px] text-[#8F8F8F] xl:max-w-[280px] max-w-[260px]">
                      {item.desc}
                    </p>
                    <div className="flex items-center gap-2 py-2">
                      {[...Array(5)].map((_, i) => (
                        <img key={i} src={item.star} className="xl:size-4 size-3" />
                      ))}
                      <span className="text-[12px] xl:text-base">{item.reviews}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">
                No results found for "{query}" {loc && `in ${loc}`}
              </p>
            )}

            {hasMore && (
              <div className="text-center">
                <button
                  onClick={handleSeeMore}
                  className="bg-[#1677BD] text-sm font-semibold text-[#f1f1f1] py-2 px-7 rounded-full mb-4 mt-4"
                >
                  See More
                </button>
              </div>
            )}
          </div>
        </div>

        {/* right */}
        <div className="xl:w-1/2 w-full mx-auto ">
          <img className="xl:w-full w-fit" src="map-4.png" alt="map" />
        </div>
      </div>
    </section>
  );
};

export default SearchData;
