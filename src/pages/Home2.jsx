import React from 'react'
import LeftHalf from '../components/LeftHalf'
import RightHalf2 from '../components/RightHalf2'

export default function Home2() {
  return (
    <div className='flex bg-[#F9F9F9] w-[2549px] h-[832px]'>
        <div className='w-[308.22px] h-[825.89px] pt-[17px] pr-[8.89px] pb-[8.89px] pl-[14px] gap-[8.89px] mr-[28px]'>
           <LeftHalf />
        </div>
        <div className='w-[2209.22px] h-[832px] py-0 px-[44px] gap-[32px]'>
            <RightHalf2/>
        </div>
    </div>
  )
}
