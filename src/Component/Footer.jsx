import React from 'react'



const Footer = () => {

  const itemlist =  {
    section:[
      { Title:"About",
        Link:{items:["About MyFeedback","Investor Relations"]}
        
      },
       { Title:"About",
        Link: {items:["MyFeedback for business","Collections","Talk","Events","Support","Developers"]}
        
      }


    ]
  }


  
  




  return (
    
      <>
        <div className='w-[80%] mx-auto mt-10 mb-5'>
      
    <div className='grid grid-cols-2'>
        {itemlist.section.map((item,index)=>(
        <div key={index}>
        
        <h3>{item.Title}</h3>
        <p>{item.Link}</p>

        </div>
      ))}
      
    </div>

      </div>
   
      </>
  )
}

export default Footer