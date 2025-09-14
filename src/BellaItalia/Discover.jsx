import React from 'react'


const Discover = () => {
   const DiscoverData =[
  {
    img:"discover.png",
    title:"The melt",
    des:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    star: "star.png",
     reviews: "5.0 (876 reviews)"
  },
   {
    img:"dc-2.png",
    title:"The melt",
    des:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    star: "star.png",
     reviews: "5.0 (876 reviews)"
  },
   {
    img:"dc-3.png",
    title:"The melt",
    des:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    star: "star.png",
     reviews: "5.0 (876 reviews)"
  },
]
  return (
    <section className="lg:w-[80%] w-[90%] mx-auto xl:pt-24 md:pt-14 pt-11 ">
    <div>
        <h2 className='lg:text-[32px] md:text-2xl text-xl font-bold text-[#1E1E1E] '>Also discover...</h2>
    </div>

    <div className='flex flex-col lg:flex-row items-center lg:justify-between justify-center gap-5 mt-6'>
        {DiscoverData.map((item,index)=>(
            <div key={index} className='bg-[#F8F8F8] w-full rounded-md'>
                 <img className=' w-full' src={item.img}/>
                 <div className='p-3'>
                    <h4 className='text-[22px] font-bold my-1'>{item.title}</h4>
                    <p className='text-[#8F8F8F] text-[16px] max-w-[280px] mb-3.5'>{item.des}</p>

                    <div className='flex items-center gap-3'>
                   {[...Array(5)].map((_,i)=>(
                     <img key={i} src={item.star}  className=' size-4 lg:size-5'/>
                   ))}
                   <p className=' text-sm text-[#7A7A7A] font-semibold'>{item.reviews}</p>
                 </div>


                 </div>
                 
            </div>
        ))}
    </div>

    </section>
  )
}

export default Discover