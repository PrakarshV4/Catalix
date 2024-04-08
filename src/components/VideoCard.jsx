import React from 'react'
import { IoPlayOutline } from "react-icons/io5";

export default function VideoCard({progress}) {
  return (<>
        <div>
            <div>
                <img src="https://s3-alpha-sig.figma.com/img/9824/f33c/76647abb61891fe13da188ea01dbbb9d?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pUCE7D3z~AF3iEBDnEjJJ1GTeiUefPTZFAdVPKbETkgSYW1PwjqfxuXP9EZhw33qua8hGoCeyMue85g5HU1l8HaV1iI6aqotNbbn3Q6mZcpQUFqr00NMudctBJkqmLFaGHWTdp808eOtsyPEEeFZKtk2IZFj2juDpcZN9RrD-mdDMrATwkKFU-y4XI3BqNwdDK6Ep1UWSmP3pRj-TcR2rKT9DnPWiL9pEaRDU66iKTyGrIsrQJb9bnh23YxDDSoQEkzS5EOWkWfKD61J5es-UKrAcCs5mEBssBzzkK55ITeNrP~V--ayfEYM8ifMU25eIR6Ka-5rwZdcWCEuLrM0iw__" alt="img" />
            </div>
            <div className="w-full h-[7.64px] bg-gray-200 rounded-full">
                    <div className="h-[7.64px] bg-blue-500 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
            <div className='flex bg-[#000000B5;] w-[82.82px] h-[36.18px] rounded-[10.18px] relative left-[20.37px] bottom-[55px] py-[5.09px] pr-[10.18px] pl-[5.09px]  items-center'>
                <div className='w-[25.46px] h-[25.46px]'>
                    <IoPlayOutline className='text-white w-[25.46px] h-[25.46px]'/>
                </div>

                <div className='ml-[5.09px] text-[16.55px] leading-[25.46px]'>
                    <span className='text-white font-[550]'>2:36</span>
                </div>
            </div>
            
        </div>
    </>
  )
}

