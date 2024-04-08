import React, { useState } from 'react'
import { BiCube } from "react-icons/bi";
import { CgHome } from "react-icons/cg";
import { FaRegClock } from "react-icons/fa6";
import { BsGraphUp } from "react-icons/bs";
import { RxRocket } from "react-icons/rx";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { IoArrowBackCircleOutline } from "react-icons/io5";


// box-shadow: 8.89px 8.89px 12.62px 0px #00000040;

export default function LeftHalf() {
  return (
    <div className='w-[285.33px] h-[800px] '>
        <div className="flex flex-col w-[285.33px] h-[800px] py-[102.22px] px-0 rounded-[35.56px] gap-[48px] bg-[#2F667F] drop-shadow-[0_15px_20px_rgba(0,0,0,0.25)]"> 
            <div className='flex w-[20.22px] h-[10.67px] gap-[10.67px]'>
                <div className='pt-[13px] pl-4'>
                    <BiCube className='text-white h-[42.67px] w-[42.67px]'/>
                </div>
                <div className='pl-[5px]'>
                    <span className='w-[176.89px] h-[47.11px] font-semibold text-white text-[42.67px]'>Catalix</span>
                </div>
                
            </div>
            
            <div className=' w-[236.44px] h-[350.22px] mt-[48px] ml-[22.44px] gap-[9.78px]'>
                <div className="flex w-[236.44px] h-[62.22px]  bg-[#539BBB] hover:cursor-pointer hover:bg-[#539BBB] rounded-[17.78px] py-[0px] px-[22.22px] gap-[15.11px] mb-[9.78px]">
                    <div className='flex py-[22.11px] gap-[15.11px]'>
                        <div>
                            <CgHome className='text-white w-[21.57px] h-[20.67px]'/>
                        </div>
                        <div className='text-white w-[54px] h-[18px] font-normal leading-[17.78px] text-[17.78px] '>
                            Home
                        </div>
                    </div>
                </div>
                
                <div className='hover:cursor-pointer hover:bg-[#539BBB] flex w-[236.44px] h-[62.22px]  rounded-[17.78px] py-[0px] px-[22.22px] gap-[15.11px] mb-[9.78px]'>
                    <div className='flex py-[22.11px] gap-[15.11px]'>
                        <div>
                            <FaRegClock className='text-white w-[21.57px] h-[20.67px]'/>
                        </div>
                        <div className='text-white w-[54px] h-[18px] font-normal leading-[17.78px] text-[17.78px] '>
                            Activities 
                        </div>
                    </div>
                </div>
                <div className='flex w-[236.44px] h-[62.22px] hover:cursor-pointer hover:bg-[#539BBB] rounded-[17.78px] py-[0px] px-[22.22px] gap-[15.11px] mb-[9.78px]'>
                    <div className='flex py-[22.11px] gap-[15.11px]'>
                        <div>
                            <BsGraphUp className='text-white w-[21.57px] h-[20.67px] '/>
                        </div>
                        <div className='text-white w-[54px] h-[18px] font-normal leading-[17.78px] text-[17.78px] '>
                         Analytics
                        </div>
                    </div>
                </div>
                <div className='flex w-[236.44px] h-[62.22px] hover:cursor-pointer hover:bg-[#539BBB] rounded-[17.78px] py-[0px] px-[22.22px] gap-[15.11px] mb-[9.78px]'>
                    <div className='flex py-[22.11px] gap-[15.11px]'>
                        <div>
                            <RxRocket className='text-white w-[21.57px] h-[20.67px]'/>
                        </div>
                        <div className='text-white w-[54px] h-[18px] font-normal leading-[17.78px] text-[17.78px] '>
                            Transformation
                        </div>
                    </div>
                </div>
                <div className='flex w-[236.44px] h-[62.22px] hover:cursor-pointer hover:bg-[#539BBB] rounded-[17.78px] py-[0px] px-[22.22px] gap-[15.11px] mb-[9.78px]'>
                    <div className='flex py-[22.11px] gap-[15.11px]'>
                        <div>
                            <HiOutlineSquare3Stack3D className='text-white w-[21.57px] h-[20.67px]'/>
                        </div>
                        <div className='text-white w-[54px] h-[18px] font-normal leading-[17.78px] text-[17.78px] '>
                            Library
                        </div>
                    </div>
                </div>
                
            </div>
            
            <div className='h-[149.33px] w-[236.44px] border-t-[0.89px] border-x-[0px] border-b-0 border-white py-[12.44px] px-0 ml-[24px] mb-[18.67px]'>
                
                <div className='flex w-[236.44px] h-[62.22px] hover:cursor-pointer hover:bg-[#539BBB] rounded-[17.78px] py-[0px] px-[22.22px] gap-[15.11px] mb-[9.78px]'>
                    <div className='flex py-[22.11px] gap-[15.11px]'>
                        <div>
                            <IoSettingsOutline className='text-white w-[21.57px] h-[20.67px]'/>
                        </div>
                        <div className='text-white w-[54px] h-[18px] font-normal leading-[17.78px] text-[17.78px] '>
                            Settings
                        </div>
                    </div>
                </div>

                <div className='flex w-[236.44px] h-[62.22px]hover:cursor-pointer hover:bg-[#539BBB] rounded-[17.78px] py-[0px] px-[22.22px] gap-[15.11px] mb-[9.78px]'>
                    <div className='flex py-[22.11px] gap-[15.11px]'>
                        <div>
                            <TbLogout className='text-white w-[21.57px] h-[20.67px]'/>
                        </div>
                        <div className='text-white w-[54px] h-[18px] font-normal leading-[17.78px] text-[17.78px] '>
                            LogOut
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
