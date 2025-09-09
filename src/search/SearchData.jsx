import React, { useState } from 'react'
import { SearchCardData } from '../CardData'

const SearchData = () => {


  const [VisibleCurrentIndex,setVisibleCurrentIndex] = useState(6)

  const handleSeeMore = () =>{
    setVisibleCurrentIndex((pre)=> pre + 6);
  }

  const visiblecards = SearchCardData.slice(0,VisibleCurrentIndex);
  const hasmore = VisibleCurrentIndex < SearchCardData.length

  return (
    <section>
        
        <div className='flex  justify-between gap-10'>
        {/* left  */}
        <div className='w-1/2 pl-10 '>
        <div>
        <p className='xl:text-base text-[#232323] md:text-sm text-[12px] my-2.5 '>Home / All restaurants</p>
        <div className='flex items-center justify-between gap-2'>
            <h4 className=' xl:text-[32px] md:text-2xl text-xl font-bold'>best restaurants in singapore</h4>
            <div className='flex items-center gap-2 py-2 px-3.5 border-1 border-[#5E5E5E] rounded-full'>
            <img src='sort.png'/>
            <button className='font-bold'> Sort</button></div>
        </div>

        </div>



        <div className='mt-10 '>
            {visiblecards.map((item,index)=>(
                <div key={index} className=''>
                     <div className='flex items-center gap-6 mb-10'>

                        <div>
                             <img className='w-[200px]' src={item.img}/>
                        </div>

                     <div>
                         <h2 className='text-[22px] text-[#232323] font-bold'>{item.title}</h2>
                      <p className='text-sm text-[#8F8F8F] max-w-[280px]'>{item.desc}</p>
                      <div className='flex items-center justify-between gap-2 py-2'>
                        {[...Array(5)].map((_,i)=>(
                            <img  key={i} src={item.star} className='w-4 h-4'/>
                        ))}
                        <span>{item.reviews}</span>
                      </div>


                     </div>
                     </div>
                </div>
            ))}

           {hasmore && (
             <div className='text-center'>
             <button onClick={handleSeeMore} className='bg-[#1677BD] text-sm font-semibold text-[#f1f1f1] py-2 px-7 rounded-full mb-4 mt-4'>See Moro</button>
            </div>
           )}
        </div>

        </div>
         {/* right  */}
        <div className='w-1/2'>
          <img className='xl:w-full w-fit ' src='map-4.png'/>
        </div>
 
        </div>
    </section>
  )
}

export default SearchData