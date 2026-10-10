import React from 'react'

const Modal = ({children ,nameMod, ref}) => {
  return (
    <dialog className='m-auto rounded-3xl p-8 bg-white w-[90%] max-w-[420px] backdrop:bg-black/50' ref={ref}>
        <div className='flex items-center justify-between mb-5'>
            <h1 className='text-2xl font-bold'>{nameMod}</h1>
            <button
              type='button'
              onClick={() => ref.current.close()}
            >x</button>
        </div>
     {children}
    </dialog>
  )
}

export default Modal