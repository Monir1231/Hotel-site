import React from 'react'
import SearchLogo from './SearchLogo'

const MYSearch = () => {
  return (
    <div className='py-2 px-4 flex items-center justify-between border border-[#ADADAD] rounded-lg w-[300px]'>
        <P>restaurant, hotel, service....</P>
        <P>restaurant</P>
        <SearchLogo/>
    </div>
  )
}

export default MYSearch