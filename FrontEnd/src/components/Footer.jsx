import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillQqCircle } from "react-icons/ai";

function Footer() {
  return (
<div className=' bg-[#eef1f1] p-5 '>
<div className='flex flex-row justify-around items-center flex-wrap'>
<div className='flex flex-row justify-center items-center flex-wrap '>
    
<ul className='p-7 flex flex-col items-center'>
<li className='p-1 text-[#697776] font-bold'>استكشف</li>
<li className='p-1 hover:bg-[#e5e2cf] duration-300'> الرئيسيه </li>
<li className='p-1 hover:bg-[#e5e2cf] duration-300'> قائمه الطعام </li>
<li className='p-1 hover:bg-[#e5e2cf] duration-300'> الحجوزات </li>
</ul>

<ul className='p-7 flex flex-col items-center'>
<li className='p-1 text-[#697776] font-bold' >لك</li>
<li  className='p-1 hover:bg-[#e5e2cf] duration-300'> حسابك </li>
<li  className='p-1 hover:bg-[#e5e2cf] duration-300'> ملفك الشخصي</li>
</ul>

<ul className='p-7 flex flex-col items-center'>
<li className='p-1 text-[#697776] font-bold'> ? لديك سؤال</li>
<li  className='p-1 hover:bg-[#e5e2cf] duration-300'> تواصل معانا </li>
<li  className='p-1 hover:bg-[#e5e2cf] duration-300'> شروط الحجز</li>
<li  className='p-1 hover:bg-[#e5e2cf] duration-300'> الخريطه </li>
</ul>
</div>
<div className='flex flex-col '>
<img src='https://i.pinimg.com/236x/02/66/00/0266002e9a14ffba6ed0685837b0ecf8.jpg' className='w-[100px] h-[100px] rounded-[50%] m-auto' alt='##'></img>
<ul className='flex flex-row '>
<li className=' cursor-pointer p-2 hover:bg-[#e5e2cf] rounded-sm duration-300 text-[#4f4b2b]'><AiFillFacebook size={20}/> </li>
<li className=' cursor-pointer p-2 hover:bg-[#e5e2cf] rounded-sm duration-300 text-[#4f4b2b]'><AiFillLinkedin  size={20}/> </li>
<li className=' cursor-pointer p-2 hover:bg-[#e5e2cf] rounded-sm duration-300 text-[#4f4b2b]'><AiFillTwitterCircle size={20}/> </li>
<li className=' cursor-pointer p-2 hover:bg-[#e5e2cf] rounded-sm duration-300 text-[#4f4b2b]'><AiOutlineWhatsApp size={20}/> </li>
<li className=' cursor-pointer p-2 hover:bg-[#e5e2cf] rounded-sm duration-300 text-[#4f4b2b]'><AiFillQqCircle size={20}/> </li>
</ul>
</div>
</div>

<div className=' border-t border-teal-500 flex sm:justify-between p-3 mt-5 flex-wrap  justify-center '>
<a href='https://www.linkedin.com/in/ahmed-mehana-b39967240/' className=' font-extralight hover:bg-black hover:text-red-600 rounded-lg duration-300 p-1'> A_Mehana</a>
<p className=' sm:text-[16px] text-[16px]'> جميع الحقوق محفوظه@ </p>
</div>
</div>


  )
}

export default Footer