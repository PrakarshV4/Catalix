import React from 'react'
import { FaRegBell } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { CiSquarePlus } from "react-icons/ci";


import { IoSearch } from "react-icons/io5";
import VideoCard from './VideoCard';
import Polygon from './Polygon';

export default function RightHalf2() {
  return (<div className='flex'>
    {/* Frame-66 */}
    <div className=' w-[2121.22px] h-[833px] gap-[27.56px]  px-0 pb-0 mr-[28px] '>
        <div className=' flex w-full ml-[71.48px] mt-[44.44px]'>

            <div className=' mr-[220.47px] bg-transparent w-[407.95px] h-[34.67px] rounded-[2.48px] border-[0.62px] flex items-center justify-center'>
                <span className='flex items-center justify-center w-[29.71px] h-[29.71px]'>
                    <IoSearch className=' text-[#539BBB]'/>
                </span>
                <input className='bg-transparent w-[407.95px] h-[34.67px] rounded-[2.48px] placeholder-black focus:outline-none' type="text" placeholder='Search by profile, setting, artifact etc...' />
                <span className='flex items-center justify-center w-[29.71px] h-[29.71px]'>
                    <MdOutlineCancel className=' text-[#539BBB]'/>
                </span>
            </div>

            {/* Components */}
            <div className='flex items-center justify-center'>
                <div className='bg-white drop-shadow-lg ml-[292.98px] mr-[13.33px] flex items-center justify-center w-[31.67px] h-[31.67px] rounded-[10.38px] p-[5.19px] gap-[5.19px]'>
                    <FaRegBell className='text-xl text-[#539BBB]'/>
                </div>
                <div className='drop-shadow-lg flex items-center justify-center bg-white  w-[31.67px] h-[31.67px] rounded-[10.38px] mr-[13.33px] p-[5.19px] gap-[5.19px]'>
                    <AiOutlineMessage className='text-[#539BBB] text-xl'/>
                </div>
                <div className='drop-shadow-lg flex items-center justify-center bg-white  w-[31.67px] h-[31.67px] mr-[13.33px] rounded-[10.38px] p-[5.19px] gap-[5.19px]'>
                    <IoSettingsOutline className='text-[#539BBB] text-xl'/>
                </div>
                <div className='drop-shadow-lg  w-[31.67px] h-[31.67px] mr-[13.33px] '>
                    <img className='rounded-full' src="https://s3-alpha-sig.figma.com/img/0198/7e91/bd98ea2594a62a77ed0b46ad32d0015a?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ilxR8xzLq9A8kuKnn6UPM4eq~MSKCo2NkgYXttVNmte1p3S4baZhsk~8u7yMqAYncIesU6p08zsWCgHY3dW2VEtCqcNnPlY~bvaiYdNrFP~u5jKtMwevDjVgLNn62A3yZB13E2c0RDe9bo9HG357M6mq0Eml2p5fNYrWL6kNIBTARQWm1TDf5sro0hSIzo~GytQYPpnfnd96ja9kE57kxPD3B8LCl4B4kU9oUjLXVqICo6XOVk7XYMaMZFXVk1fs5yo5Tfy607w4QxL9GmjXtCOlmin4Ikr1B~kzlVmULgT-esXAPR~im85k8IPSyAieA1434I3EkIYFSXUIh3GnKg__" alt="profile_img" />
                </div>
            </div>

        </div>
        {/* Group-249 */}
        <div className=' flex flex-col w-[1523.39px] h-[359.65px] mt-[211px]'>
            <div className='flex ml-[155.48px]'>
                <Polygon className='' text1={`Approve`} text2={`Content`}/>
                <HiOutlineArrowLongRight className=' text-7xl text-[#BBBBBB]' />
                <div className='flex mt-[10px] justify-center items-center h-[50.7px] w-[50.7px] '>
                    <MdAccessTime className='text-5xl text-[#539BBB]'/>
                </div>

                <HiOutlineArrowLongRight className=' text-7xl text-[#BBBBBB]' />
                
                <Polygon className='' text1={`Create`} text2={`Content`}/>
                <HiOutlineArrowLongRight className=' text-7xl text-[#BBBBBB]' />
                <div className='flex mt-[10px] justify-center items-center h-[50.7px] w-[50.7px] '>
                    <MdAccessTime className='text-5xl text-[#539BBB]'/>
                </div>
                
                <HiOutlineArrowLongRight className=' text-7xl text-[#BBBBBB]' />
                
                <Polygon className='' text1={`Approve`} text2={`Content`}/>
                <HiOutlineArrowLongRight className=' text-7xl text-[#BBBBBB]' />
                <div className='flex mt-[10px] justify-center items-center h-[50.7px] w-[50.7px] '>
                    <MdAccessTime className='text-5xl text-[#539BBB]'/>
                </div>
                
                <HiOutlineArrowLongRight className=' text-7xl text-[#BBBBBB]' />
                
                <Polygon className='' text1={`Run`} text2={`Sample`} text3={`Test`}/>
                <HiOutlineArrowLongRight className=' text-7xl text-[#BBBBBB]' />
                <div className='flex mt-[10px] justify-center items-center h-[50.7px] w-[50.7px] '>
                    <MdAccessTime className='text-5xl text-[#539BBB]'/>
                </div>

                <HiOutlineArrowLongRight className=' text-7xl text-[#BBBBBB]' />
                
                <Polygon className='' text1={`Launch Full`} text2={`Campaign`}/>
                <HiOutlineArrowLongRight className=' text-7xl text-[#BBBBBB]' />
                
                <div className='flex mt-[10px] items-center justify-center h-[44.76px] w-[44.76px]'>
                    <CiSquarePlus className='text-6xl text-[#6C6F6B]'/>
                </div>

            </div>          
            <div className='flex mt-[24.35px] h-[59.28px] items-center'>
                <div className='w-[124.07px] h-[24.34px] font-medium text-[15.71px] ' >
                    Active Time
                </div>

                <div className=' flex items-center h-[59.28px] w-full border-y-[0.79px] border-[#C1C6BE] text-[#494C55] pl-[7.08px]'>
                    <div className='flex items-center justify-center  w-[124.07px] h-[24.34px] font-medium  text-[15.71px] mr-[162.55px]'>
                        <span className='text-center' >1 Day</span>
                    </div>
                    <div className='flex items-center justify-center w-[124.07px] h-[24.34px] font-medium  text-[15.71px] mr-[162.55px]'>
                        <span className='text-center' >2 Days</span>
                    </div>
                    <div className='flex items-center justify-center w-[124.07px] h-[24.34px] font-medium  text-[15.71px] mr-[162.55px]'>
                        <span className='text-center' >4 Hours</span>
                    </div>
                    <div className='flex items-center justify-center w-[124.07px] h-[24.34px] font-medium  text-[15.71px] mr-[162.55px]'>
                        <span className='text-center' >4 Hours</span>
                    </div>
                    <div className='flex items-center justify-center w-[124.07px] h-[24.34px] font-medium  text-[15.71px] '>
                        <span className='text-center' >1 Day</span>
                    </div>
                </div>
            </div>

            <div className='flex items-center h-[102.87px]'>
                <div className='w-[124.07px] h-[24.34px] font-medium text-[15.71px] ' >
                    Wait time
                </div>
                
                <div className=' flex items-center h-full w-full text-[#707070] pl-[7.08px] border-b-4 border-[#539BBB] font-medium text-[12.56px]'>
                    <div className='ml-[164.12px] flex flex-col items-center justify-center bg-[#F1F7ED] w-[134.28px] h-full'>
                        <div className='text-left'>
                            <div>2 Weeks (wait) </div>
                            <div>for availability</div>
                        </div>
                        
                    </div>
                    <div className=' ml-[155.48px] flex flex-col items-center justify-center bg-[#F1F7ED] w-[134.28px] h-full'>
                        <div className='text-left'>
                            <div>1 Week (wait </div>
                            <div>for approval</div>
                            <div>authority)</div>
                        </div>
                    </div>
                    <div className=' ml-[155.48px] flex flex-col items-center justify-center bg-[#F1F7ED] w-[134.28px] h-full'>
                        <div className='text-left'>
                            <div>2 Weeks (wait </div>
                            <div>for IT support)</div>
                        </div>
                    </div>
                    <div className=' ml-[155.48px] flex flex-col items-center justify-center bg-[#F1F7ED] w-[134.28px] h-full'>
                        <div className='text-left'>
                            <div>1 Week (wait </div>
                            <div>for test</div>
                            <div>response)</div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='flex mt-[65.18px] ml-[297.61px] w-[950.15px] h-[19.63px] '>
                <div className='h-[20px] w-[204.95px] text-[#575757] font-semibold text-[18.85px] leading-[19.63px] mr-[134.28px]'>
                    <span>Flow Time = 47 Days</span>
                </div>
                <div className='flex h-[20px] w-[277.19px] text-[#575757] font-semibold text-[18.85px] leading-[19.63px] mr-[134.28px]'>
                    <span>Total Active Time = 5 Days</span>
                </div>
                <div className='h-[20px] w-[204.95px] text-[#575757] font-semibold text-[18.85px] leading-[19.63px]'>
                    <span>Flow Efficiency = 11%</span>
                </div>
            </div>

            <div>
            
            </div>
        </div>
        <div className='h-[40px] w-[93px] mt-[65.84px] ml-[427px]'>
            <button className='flex  items-center justify-center bg-[#2F667F] hover:opacity-95 text-white font-medium text-[18px]  w-full h-full rounded-[100px] gap-[8px]'>Save</button>
        </div>
        
        
        

    </div>
  </div>
  )
}

