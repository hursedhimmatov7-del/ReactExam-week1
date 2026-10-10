import React from 'react'

const Sec35 = ({h1 , h2 ,h3 , img}) => {
  return (
    <section className='flex lg:flex-row-reverse flex-col lg:w-325 w-[90%] m-auto my-10 items-center lg:justify-between'>
      <div className='flex flex-col items-start gap-5 lg:w-[60%]'>
        <h1 className='lg:text-4xl font-bold  '>{h1}</h1>
        <h1>{h2}</h1>
        <h1>{h3}</h1>
      </div>
      <img className='lg:w-[30%] w-full' src={img} alt="" />
    </section>
    
  )
}

export default Sec35
