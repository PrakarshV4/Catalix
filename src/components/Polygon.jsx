import React from 'react'
import { IoTriangleSharp } from "react-icons/io5";

export default function Polygon({text1,text2,text3}) {
  return (
    <div className='flex flex-row  w-[90.29px] h-[72.84px] bg-black overflow-hidden items-center justify-center'>
        
        {/* Square */}
        <div className='flex flex-col  items-center justify-center w-[90.29px] h-[72.84px] bg-[#539BBB] '>
            <div className='text-align flex flex-col'>

                <span className='text-white text-left text-[15.71px] leading-[19.63px] font-medium'>{text1}</span>
                <span className='text-white text-[15.71px] leading-[19.63px] font-medium'>{text2}</span>
                <span className='text-white text-left  text-[15.71px] leading-[19.63px] font-medium'>{text3}</span>
            
            </div>
        </div>
        {/* Triangle  */}
        
        {/* <IoTriangleSharp className=' ml-[-17px] w-[95.29px] h-[77.95px]  text-[#539BBB] transform rotate-90 left-[10px]'/>
        <div className='relative flex flex-col items-center justify-center top-0 left-5 pt-[11px]'>
            <span className='text-white'>{text1}</span>
            <span className='text-white'>{text2}</span>
        </div> */}
        
    </div>
  )
}
// ml-[-15.9px]