import React from 'react'
import LeftHalf from '../components/LeftHalf'
import RightHalf from '../components/RightHalf'

export default function Home() {
  return (
    <div className='flex bg-[#F9F9F9] w-[1276.44px] h-[832px]'>
        <div className='w-[308.22px] h-[825.89px] pt-[17px] pr-[8.89px] pb-[8.89px] pl-[14px] gap-[8.89px] mr-[28px]'>
           <LeftHalf />
        </div>
        <div className='w-[940.22px] h-[832px] gap-[28px]'>
            <RightHalf />
        </div>
    </div>
  )
}
