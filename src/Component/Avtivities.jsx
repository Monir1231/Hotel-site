import React from "react";
import { avtivitiesData } from "../CardData";
import { FaArrowRight ,FaArrowLeft} from "react-icons/fa";

const Avtivitie = () => {
  return (
    <div className="w-[98%] mx-auto lg:my-10 md:my-20 my-14   rounded-md px-2 py-10">
      <div className="flex flex-col lg:flex-row md:flex-row gap-6 items-center justify-between">
      {avtivitiesData.map((item,index)=>(
        <div key={index} className="bg-[#F8F8F8] p-4 rounded-md">
          <div className="flex items-center gap-1">
           <div className="bg-white py-2.5 px-2.5 rounded-full">
             <img className="w-[24px] " src={item.menLogo}/>
           </div>
            <div>
             <h4 className="text-xl text-[#232323] font-semibold">{item.title}</h4>
             <h6 className="text-[#8A8A8A] text-base">{item.Location}</h6>
            </div>
          </div>

         <div className="flex items-center gap-1.5 mt-3.5">
           <div className="flex items-center gap-1 ">
           <img className="w-4" src={item.star}/>
           <img className="w-4" src={item.star}/>
           <img className="w-4" src={item.star}/>
           <img className="w-4" src={item.star}/>
           <img className="w-4" src={item.star}/>
          </div>

          <p className="text-[#343434] text-sm">{item.date}</p>
         </div>

         <p className="mt-3 mb-4 text-[16px] font-sans text-[#5E5E5E] max-w-[435px]">{item.des}</p>

         <div className=" flex items-center  justify-center gap-7 w-[100px] mx-auto my-2">
           <img className="" src={item.img1}/>
            <img className="" src={item.img2}/>
             <img className="" src={item.img3}/>
         </div>

         <h4 className="text-[17px] font-semibold  underline mt-1">{item.link}</h4>

        </div>
      ))}
       <button  className=" absolute right-14 -mt-10 transform translate-x-6 flex items-center justify-center text-black bg-white shadow rounded-full w-9 h-9 z-10  duration-300 transition-all hover:cursor-pointer">
                    <FaArrowRight />
                  </button>
      </div>
    </div>
  );
};

export default Avtivitie;
