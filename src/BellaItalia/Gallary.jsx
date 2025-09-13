import React from 'react'

const Gallary = () => {
  return (
    <section className='lg:w-[80%] w-[90%] mx-auto xl:pt-16 md:pt-14 pt-11 text-center lg:text-start'>
    <div>
        <h4 className='lg:text-[35px] md:text-3xl text-2xl font-semibold text-[#1E1E1E] mb-5'>Discover our magnificent place in photos</h4>
        <p className='text-sm lg:text-base text-[#5E5E5E] max-w-[601px] mb-14'>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing.</p>
    </div>

    <div className='flex flex-col md:flex-row items-center gap-9'>
    {/* left  */}
    <div className='lg:w-1/2 w-full'>
     <img className='lg:w-full  lg:h-[552px] w-fit' src='big-img.png'/>
    </div>
    {/* right  */}
    <div className='lg:w-1/2 w-full'>
        <div className='flex items-center justify-center gap-1.5 lg:w-full w-[200px] mx-auto mb-3 '>
            <img  src='small-img.png'/>
            <img src='small-img.png'/>
        </div>
        <div className='flex items-center justify-center gap-1.5 lg:w-full w-[200px] mx-auto'>
            <img  src='small-img.png'/>
            <img src='small-img.png'/>
        </div>
    </div>

    </div>
    
    
    </section>
  )
}

export default Gallary