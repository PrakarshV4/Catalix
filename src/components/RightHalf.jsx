import React from 'react'
import { FaRegBell } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import VideoCard from './VideoCard';
import { useNavigate } from 'react-router-dom'

export default function RightHalf() {
    const navigate = useNavigate();
  return (<div className='flex'>
    {/* Frame-66 */}
    <div className='w-[520.27px] h-[833px] gap-[27.56px] pt-[44.44px] px-0 pb-0 mr-[28px] '>
        <div className='ml-[71.48px] bg-transparent w-[407.95px] h-[34.67px] rounded-[2.48px] border flex items-center justify-center mb-[27.56px]'>
            <span className='flex items-center justify-center w-[29.71px] h-[29.71px]'>
                <IoSearch className=' text-[#539BBB]'/>
            </span>
            <input className='bg-transparent w-[407.95px] h-[34.67px] rounded-[2.48px] placeholder-black focus:outline-none' type="text" placeholder='Search by profile, setting, artifact etc...' />
            <span className='flex items-center justify-center w-[29.71px] h-[29.71px]'>
                <MdOutlineCancel className=' text-[#539BBB]'/>
            </span>
        </div>

        {/* Frame-51 */}
        <div className='w-full h-[98.56px] mb-[27.56px]'>
            <div className='w-[520.27px] h-[34px]'>
                <span className='font-normal text-[23.11px] leading-[34px]'>Set-up Catalix for Success</span>
            </div>
            <div className='w-[520.27px] h-[53px]'>
                <span className='font-light text-[15.69px] leading-[26.15px] text-[#494C55]'>Get Catalix up to date or start your transformation by following the guide below.</span>
            </div>
        </div>
        
        {/* Frame-68 */}
        <div className='flex flex-col bg-white drop-shadow-[0_15px_20px_rgba(0,0,0,0.25)] w-full h-[347px] rounded-[20px] py-[30px] px-[40px] items-center '>
            <div className=''>
                <button className='w-[80px] h-[40px] rounded-[100px] gap-[8px] bg-[#539BBB] text-white'>
                    2/6
                </button>
            </div>
            
            <div className='mt-[40px] w-[440.27px] h-[60px] text-center'>
                <span className='font-normal text-[24px] leading-[30px] '>Build your development value stream map</span>
            </div>

            <div>
                <button onClick={()=>{navigate(`/Home2`)}} className='text-white mt-[40px] w-[170px] h-[40px] rounded-[100px] gap-[8px] hover:opacity-95 font-semibold bg-[#539BBB]'>Start Building</button>
            </div>

            <div className='flex mt-[40px] bg-white w-[87px] h-[27px] p-[10px]'>
                <button className='hover:cursor-pointer bg-[#616161] hover:bg-[#539BBB] rounded-full w-[7px] h-[7px] mr-[5px]'></button>
                <button className='hover:cursor-pointer bg-[#616161] hover:bg-[#539BBB] rounded-full w-[7px] h-[7px] mr-[5px]'></button>
                <button className='hover:cursor-pointer bg-[#616161] hover:bg-[#539BBB] rounded-full w-[7px] h-[7px] mr-[5px]'></button>
                <button className='hover:cursor-pointer bg-[#616161] hover:bg-[#539BBB] rounded-full w-[7px] h-[7px] mr-[5px]'></button>
                <button className='hover:cursor-pointer bg-[#616161] hover:bg-[#539BBB] rounded-full w-[7px] h-[7px] mr-[5px]'></button>
                <button className='hover:cursor-pointer bg-[#616161] hover:bg-[#539BBB] rounded-full w-[7px] h-[7px] mr-[5px]'></button>
            </div>
        </div>

    </div>



    <div className='bg-white drop-shadow-lg w-[391.96px] h-[853px] pt-[36.78px] px-[17.78px] pb-[28.44px] gap-[24.89px] '>
        {/* Frame-46 */}
        {/* Components */}
        <div className='flex items-center justify-center'>
            <div className='bg-white drop-shadow-lg ml-[292.98px] mr-[13.33px] flex items-center justify-center w-[31.67px] h-[31.67px] rounded-[10.38px] p-[5.19px] gap-[5.19px]'>
                <FaRegBell className='text-xl text-[#539BBB]'/>
            </div>
            <div className='drop-shadow-lg flex items-center justify-center bg-white  w-[31.67px] h-[31.67px] rounded-[10.38px] p-[5.19px] gap-[5.19px]'>
                <AiOutlineMessage className='text-[#539BBB] text-xl'/>
            </div>
        </div>
        {/* Frame-55 */}
        <div className='w-[356.4px] h-[726px] gap-[46.22px]  mt-[31.55px]'>
            {/* Frame-51 */}
            <div className='w-full h-[347px] gap-[21.33px]'>
                {/* Frame-51 */}
                <div className='w-full h-[124.56px] '>
                    <div className=' w-full h-[34px] mb-[11.56px]'>
                        <span className='font-normal text-[23.11px] leading-[34px] mb-[11.56px]'>Get ready to transform</span>
                    </div>
                    <div className='w-full h-[79px]'>
                        <p className='font-light text-[15.69px] leading-[26.15px] text-[#494C55]'>Here's a video to get started. As your transformation progresses, you'll get fresh tips and insights here.</p>
                    </div>
                </div>

                {/* Video img*/}
                <div className='mt-[21.33px]'>
                    <VideoCard progress={`13`} />
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}

