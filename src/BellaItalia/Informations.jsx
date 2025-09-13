import React from 'react'
import { Informationdata } from '../CardData'

const Informations = () => {
  return (
    <section className='lg:w-[80%] w-[90%] mx-auto xl:pt-16 md:pt-14 pt-11 text-center lg:text-start'>
         <h4 className='lg:text-[35px] md:text-3xl text-2xl font-semibold text-[#1E1E1E] mb-5'>More informations</h4>
         <div className='flex flex-col  lg:flex-row items-center justify-between lg:gap-3 gap-5'>
         {/* left  */}
         <div className='lg:w-1/2 w-full'>
         {Informationdata.map((item,index)=>(
            <div key={index}>
          
            <div className='flex items-center gap-2 py-3'>
            <img className='lg:size-6 size-5' src={item.dataimg}/>
            <a className='text-lg '>{item.title}</a>
            </div>

             
          
           
          

            </div>
           
         ))}
          

         </div>
         {/* right  */}
         <div className='lg:w-1/2 w-full'>
          <img className='w-full' src="small-map.png"/>
         </div>

         </div>
    </section>
  )
}

export default Informations