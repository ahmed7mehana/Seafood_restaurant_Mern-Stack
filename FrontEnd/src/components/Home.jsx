import { Link } from '@mui/material';
import React from 'react'
import { AiOutlineBars } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineCarryOut } from "react-icons/ai";
import Detail from './Detail';

function Home() {
  return (
    <div className=''>
    <img src='https://i.pinimg.com/564x/60/41/54/604154c91c10c4fac50a1b32ae05b449.jpg' className=' object-cover h-screen w-screen '></img>
    <div className=' flex flex-col justify-center items-center absolute left-[50%]  top-[50%] translate-x-[-50%] translate-y-[-50%] transform'>
    <img src='https://i.pinimg.com/564x/44/2c/4f/442c4fc8dde8fc113a70fd12af0e3111.jpg' className='  rounded-full w-[400px]' alt='img'/>
    <ul className='flex flex-wrap mt-5 justify-center'>
    <li className='text-[17px] hover:font-bold   hover:bg-slate-950 hover:text-red-600 transition bg-white p-2  rounded-sm min-w-[200px] m-1 flex-wrap'>
    <a className=' 	no-underline	 flex items-center  justify-center' href='/menu'>قائمه الطعام <AiOutlineBars /></a>
  </li>
  <li className='text-[17px] hover:font-bold   hover:bg-slate-950 hover:text-red-600 transition bg-white p-2  rounded-sm min-w-[200px] m-1 flex-wrap'>
    <a className=' 	no-underline	 flex items-center  justify-center' href='Reservations'>الحجوزات <AiOutlineCarryOut/></a>
  </li>
  <li className='text-[17px] hover:font-bold   hover:bg-slate-950 hover:text-red-600 transition bg-white p-2  rounded-sm min-w-[200px] m-1 flex-wrap'>
    <a className=' 	no-underline	 flex items-center  justify-center' href='profile'>حسابك <AiOutlineUser /></a>
  </li>
    </ul>

    <div>
    
    </div>
    </div>
    <Detail/>
    </div>
  )
}

export default Home