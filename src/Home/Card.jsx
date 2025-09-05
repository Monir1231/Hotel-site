import React from "react";
import { CardAlldata } from "../CardData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaRegStar } from "react-icons/fa";

const HostelCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className=" w-[85%] mx-auto lg:mt-28 md:mt-20 mt-14  bg-[#1677BD] rounded-md px-6 py-10">
          <div>            <h4 className="lg:text-[32px] md:text-2xl text-xl text-white pt-4 pb-10">
              Find the best restaurant ratings below
            </h4>
          </div>
          <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 ">
            {CardAlldata.map((item, index) => (
              <div key={index} className=" text-white bg-white rounded-lg">
                <img className=" w-full" src={item.img} />
                <div className="p-2">
                  <h4 className="text-[19px] text-black font-semibold py-2">
                    {item.title}
                  </h4>
                  <p className="text-[#8F8F8F] text-sm">{item.desc}</p>

                  <div className="flex items-center justify-between pt-4 pb-2">
                    <div className="flex items-center gap-2  text-sm text-black">
                      <img src={item.star} />
                      <img src={item.star} />
                      <img src={item.star} />
                      <img src={item.star} />
                      <img src={item.star} />
                    </div>
                    <p className=" text-black text-sm font-samibold">{item.reviews}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HostelCard;
