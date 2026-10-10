import React from 'react'

const Cards = ({tex1 ,tex2}) => {
  return (
    <div className='lg:w-[18%] w-[46%] h-20 rounded-3xl border-2 border-[#DFCCB7] flex items-center flex-col justify-center gap-1'>
      <h1 className='text-[15px] font-bold'>{tex1}</h1>
      <h1 className='text-[12px]'>{tex2}</h1>
    </div>
  )
}

 export default Cards