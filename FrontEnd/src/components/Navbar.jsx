import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineBars } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineCarryOut } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillQqCircle } from "react-icons/ai";
import { useSelector } from 'react-redux';



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#ff0000');

  const { user } = useSelector((state) => state.auth);

  console.log(user)


  const handleNav = () => {
    setNav(!nav);
  };
  const [rotationCount, setRotationCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationCount((prevCount) => prevCount + 1);
    }, 2000); // تعيين التأخير بين الدورات (2000 مللي ثانية أي 2 ثانية هنا)

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
        setNavBg(false)
      } else {
        setLinkColor('#000')
        setNavBg(true)
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? ' fixed top-0 w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : ' fixed top-0 w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-5 pl-5 2xl:px-16'>

      <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <li className='m-3 text-[15px] uppercase hover:border-b border-gray-950 hover:text-red-950 font-bold  duration-300 ease-in-out'>
              <a className='flex items-center' href='/Menu'>قائمه الطعام <AiOutlineBars /></a>
            </li>
            <li className='m-3 text-[15px] uppercase hover:border-b border-gray-950 hover:text-red-950 font-bold  duration-300 ease-in-out'>
              <a className='flex items-center' href='/Reservations'>الحجوزات <AiOutlineCarryOut/></a>
            </li>
            <li className='m-3 text-[15px] uppercase hover:border-b border-gray-950 hover:text-red-950 font-bold  duration-300 ease-in-out'>
              <a className='flex items-center' href='/Profile'>حسابك <AiOutlineUser /></a>
            </li>
      



          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>




        <a href='/'>
<img src='https://i.pinimg.com/236x/02/66/00/0266002e9a14ffba6ed0685837b0ecf8.jpg' className=' image-rotator sm:w-[70px] sm:h-[70px] w-[50px] h-[50px] rounded-[50%]'></img>
        </a>
  {user?"":(
<ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
  <li className='m-3  text-[16 px] uppercase hover:border-b border-gray-950 hover:text-red-950 font-bold  duration-300 ease-in-out'>
  <a className='flex items-center' href='/register'> Register <AiOutlineUser /></a>
</li>

  <li className='m-3  text-[16 px] uppercase hover:border-b border-gray-950 hover:text-red-950 font-bold  duration-300 ease-in-out'>
  <a className='flex items-center' href='/Login'>Login  <AiOutlineUser /></a>
</li>
</ul>
  )}

{user?.isAdmin?(
  <ul className='hidden md:flex'>

  <li className='m-3  text-[16px] uppercase hover:border-b border-gray-950 hover:text-red-950 font-bold  duration-300 ease-in-out'>
  <a className='flex items-center' href='/Meal'>الاكلات <AiOutlineUser /></a>
</li>

  <li className='m-3  text-[16 px] uppercase hover:border-b border-gray-950 hover:text-red-950 font-bold  duration-300 ease-in-out'>
  <a className='flex items-center' href='/Users'>المستخدمين  <AiOutlineUser /></a>
</li>

  <li className='m-3  text-[16 px] uppercase hover:border-b border-gray-950 hover:text-red-950 font-bold  duration-300 ease-in-out'>
  <a className='flex items-center' href='/RvsDash'> Rvs <AiOutlineUser /></a>
</li>

  </ul>
):""}
  

      </div>





      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-full bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-full bg-[#ecf0f3] p-5 ease-in duration-500'
              : 'fixed left-[-194%] top-0 p-5 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <a href='/'>
                <a>
                  <img
                  src='https://i.pinimg.com/236x/02/66/00/0266002e9a14ffba6ed0685837b0ecf8.jpg' className=' image-rotator w-[50px] h-[50px] rounded-[50%]'
                    alt='/'
                  />
                </a>
              </a>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-1 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'/>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <a href='/Menu' >
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:text-red-500 hover:bg-black rounded-lg duration-500 p-2'>
                food menu
                </li>
              </a>
              <a href='/profile' >
                <li onClick={() => setNav(false)} className='py-4 text-sm   hover:text-red-500 hover:bg-black rounded-lg duration-500 p-2'>
profile                </li>
              </a>
              <a href='/#' >
                <li onClick={() => setNav(false)} className='py-4 text-sm   hover:text-red-500 hover:bg-black rounded-lg duration-500 p-2'>
                reservations
                </li>
              </a>

{user?"":(
<>
<a href='/register' >
           <li onClick={() => setNav(false)} className='py-4 text-sm   hover:text-red-500 hover:bg-black rounded-lg duration-500 p-2'>
           register
           </li>
         </a>
<a href='/login' >
           <li onClick={() => setNav(false)} className='py-4 text-sm   hover:text-red-500 hover:bg-black rounded-lg duration-500 p-2'>
           login
           </li>
         </a>
</>
  )}

{user?.isAdmin?(
  <a href='/Users' >
  <li onClick={() => setNav(false)} className='py-4 text-sm   hover:text-red-500 hover:bg-black rounded-lg duration-500 p-2'>
Users            
</li>
</a>

): ""}

{user?.isAdmin?(
  <a href='/Meal' >
  <li onClick={() => setNav(false)} className='py-4 text-sm   hover:text-red-500 hover:bg-black rounded-lg duration-500 p-2'>
  Meal            
</li>
</a>

): ""}
{user?.isAdmin?(
  <a href='/RvsDash' >
  <li onClick={() => setNav(false)} className='py-4 text-sm   hover:text-red-500 hover:bg-black rounded-lg duration-500 p-2'>
  Rvs            
</li>
</a>

): ""}


            </ul>
   
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
