import React from 'react'

const MyFeedback = () => {
  return (
   <section className='w-full mx-auto bg-[#F2F2F2] mt-14 py-4'>
   <div className='w-[85%] mx-auto flex flex-col-reverse lg:flex-row gap-8 justify-center items-center'>

   {/* left  */}
   <div className=' w-full lg:w-1/2 px-4'>
  <h2 className='text-[#1E1E1E] lg:text-[26px] text-lg font-bold lg:max-w-[502px]'>MyFeedback for Business has resources to help you plan, start, grow, and advertise your small business</h2>
  <p className='lg:text-base text-sm text-[#5E5E5E] lg:max-w-[453px] py-2'>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</p>
  <button className='bg-black text-white px-4 py-2 rounded-full mt-4'>Explore MyFeedback business</button>

   </div>
   {/* right  */}
   <div className=' w-full lg:w-1/2 px-4'>
     <img className='w-full' src='fade.png'/>
   </div>


   </div>

   </section>
  )
}

export default MyFeedback