import React from "react";



function Navbar(){
    return(
        <>
         <nav>
            <div className="w-5/6 container mx-auto flex justify-between items-center mt-8">
                <div>
                <img  src="https://open.cruip.com/static/media/logo.2810a88b.svg" alt="logo"/>
                </div>
                <div className="md:space-x-14 space-x-6 md:flex hidden">
                    <div className="pt-1">
                    <a href="#" className="text-[#AEAFAF] text-[16px] font-medium leading-[24px]">Documentation</a>
                    </div>
               
                    <button className="bg-[#6B6DFF] text-white p-1 px-5 rounded text-[16px] font-normal leading-[24px]">Sign Up</button>
                </div>
                <div className="flex md:hidden">
                <i className="fa fa-bars" style={{fontSize:"28px", color:"white"}}></i>
                </div>
               
            </div>
         </nav>
        </>
    )
}

export default Navbar