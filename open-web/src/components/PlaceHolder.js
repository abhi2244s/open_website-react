import React from 'react'

function PlaceHolder() {
  return (
    <div className='w-5/6 container mx-auto bg-[#5658DD] border-[#5658DD] border-solid items-center md:mt-24 mt-8 md:h-[200px]  h-auto'>
       <div className='m-6 mt-16'>
        <h1 className='text-white md:text-[44px] text-[25px] md:leading-[52px] leading-[30px] font-semibold pt-8'>For previewing layouts and visual?</h1>
       </div>
       <div className='m-6 mb-12 mt-8'>
        <input type="email" className='md:p-3 p-2 mb-16'placeholder='Your email'/>
       </div>
    </div>
  )
}

export default PlaceHolder