import React from 'react'
import { HosterData } from '../CardData'

const Hero = () => {
  return (
    <div className='w-full bg-[url("bellHero.png")] bg-no-repeat bg-center bg-cover md:h-[529px] h-[400px]'>
    <img className='w-fit  absolute md:h-[529px] h-[400px]' src='Rgba.png'/>
     <div className=' relative top-0 left-0 lg:w-[80%] w-[90%] mx-auto xl:pt-16 md:pt-14 pt-11 text-center lg:text-start'>
        {HosterData.map((item,index)=>(
         <div key={index} className='text-white  text-center lg:text-start'>
            <h4 className=' font-semibold lg:text-[52px] md:text-[40px] text-[35px] text-white'>{item.title}</h4>

           <div className='flex items-center justify-center lg:justify-normal gap-3 py-2.5'>
             <div className='flex items-center gap-1.5'>
              {[...Array(5)].map((_,i)=>(
                <img key={i} src={item.star} alt='star' className='lg:size-5 size-4'/>
              ))}
            </div>
            <p className='text-sm lg:text-[19px]'>{item.reviews}</p>
           </div>
           <p className='xl:max-w-[528px] md:max-w-[500px] md:mx-auto xl:mx-0  xl:text-[19px] md:text-base text-sm' >{item.desc}</p>
           {/* location */}

           <div className='flex items-center justify-center lg:justify-normal md:mt-10 mt-7  gap-2.5'>
            <img src={item.Locimg}/>
            <p className='text-sm lg:text-[19px]'>{item.Location}</p>
           </div>

           {/* time  */}

           <div className='flex items-center justify-center lg:justify-normal md:mt-10 mt-4 gap-2.5'>
            <img src={item.timeimg}/>
            <p className='text-sm lg:text-[19px]'>{item.date}</p>
           </div>
         </div> 
        ))}
     </div>
    
    </div>
  )
}

export default Hero