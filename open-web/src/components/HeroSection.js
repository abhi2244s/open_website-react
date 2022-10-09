import React from "react";


import "./HeroSection.css"
function HeroSection(){
    return(
        <>
         <div className="container mx-auto w-5/6 text-center md:mt-20 mt-8">
            <div>
                <h1 className="text-[52px] font-extrabold leading-[62px] text-white heading">Landing template for <span className="text-[52px] font-extrabold leading-[62px] text-[#5658DD]">startups</span></h1>
            </div>
            <div className="mt-6 w-5/6 container mx-auto text-center">
                <p className="text-[20px] font-normal leading-[30px] text-[#88939C] ">Our landing page template works on all devices, so you only have <br /> to set it up once, and get beautiful results forever.</p>
            </div>
            <div className="mt-6 space-x-6">
                <button className="bg-[#6B6DFF] rounded text-white text-[16px] font-semibold leading-[24px] p-3 px-6">Get Started</button>
                <button className="rounded text-white text-[16px] font-semibold leading-[24px] bg-[#2A2D32] p-3 px-6">View on Github</button>
            </div>
         </div>
        </>
    )
}
export default HeroSection