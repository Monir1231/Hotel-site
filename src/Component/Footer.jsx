import React from "react";


const MyFooter = () => {


  return (
    <>
      <div className=" w-[92%] lg:w-[60%] mx-auto mt-10 mb-5">
        <div className="flex  justify-between gap-4">
        <div>
          <h4 className=" text-lg md:text-xl text-[#1E1E1E] pt-3 font-semibold">About</h4>
          <ul className="text-[#5E5E5E] text-[12px] md:text-sm mt-3 space-y-2">
            <li>About MyFeedback</li>
            <li>Investor Relations</li>
          </ul>
        </div>

         <div>
          <h4 className="text-lg md:text-xl text-[#1E1E1E] pt-3 font-semibold">MyFeedback</h4>
          <ul className="text-[#5E5E5E] text-[12px] md:text-sm  mt-3 space-y-2">
            <li>MyFeedback for business</li>
            <li>Collections</li>
            <li>Talk</li>
            <li>Events</li>
            <li>MyFeedback blog</li>
            <li>Support</li>
            <li>Developers</li>
          </ul>
        </div>


         <div>
         <div>
           <h4 className="text-xl text-[#1E1E1E] pt-3 font-semibold">About</h4>
          <select className="outline-none mt-3 space-y-2">
            <option>Languages</option>
          </select>
         </div>

         <div>
           <h4 className="text-xl text-[#1E1E1E] pt-3 font-semibold">About</h4>
          <select className="outline-none mt-3 space-y-2">
            <option>Countries</option>
          </select>
         </div>
        </div>

         
        </div>
      </div>
    </>
  );
};

export default MyFooter;
