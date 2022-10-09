import React from 'react'

function Footer() {
    const date = new Date().getFullYear();
    console.log(date)
  return (
    <div className='container mx-auto w-5/6 md:mt-20 mt-8 mb-24 flex justify-between md:flex-row flex-col'>
       <div>
         <p className='text-white'>Made by Abhishek. All right reserved {date}</p>
       </div>
       <div className='space-x-6 md:mt-0 mt-8'>
        <a href='#'className='text-[#9CA7AE]'>About</a>
        <a href='#' className='text-[#9CA7AE]'>Contact</a>
        <a href='#' className='text-[#9CA7AE]'>Faq</a>
        <a href='#' className='text-[#9CA7AE]'>Support</a>
       </div>
    </div>
  )
}

export default Footer