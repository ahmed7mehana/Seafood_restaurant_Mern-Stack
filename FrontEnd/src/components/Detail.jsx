import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillQqCircle } from "react-icons/ai";



import { AiOutlineBars } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineCarryOut } from "react-icons/ai";


function Detail() {
  return (
    <div className='bg-[#f7f8f8]'>

    <div className='flex justify-center items-center flex-wrap-reverse'>
    <div className='flex flex-col sm:text-end text-center w-[90%] sm:w-[50%] '>
    <h2 className='text-[20px] font-bold'> بكل الحب من الاكاتسكي </h2>
    <p className='text-[20px] font-mono'>بتوليفة عصرية فريدة، يقدّم لك مطعم اكاتسكي المذاق اليباني  الرفيع؛
     ويمنحك تجربة غنية بالتفاصيل وسط أجواء فاخرة وهادئة،
     تلبي تفضيلاتك وتناغم حواسك، وتعرفك على حبٍ جديد  </p>
     <ul className='flex flex-row justify-end'>
     <li className=' cursor-pointer p-2 hover:bg-[#e5e2cf] rounded-sm duration-300 text-[#4f4b2b]'><AiFillFacebook size={20}/> </li>
     <li className=' cursor-pointer p-2 hover:bg-[#e5e2cf] rounded-sm duration-300 text-[#4f4b2b]'><AiFillLinkedin  size={20}/> </li>
     <li className=' cursor-pointer p-2 hover:bg-[#e5e2cf] rounded-sm duration-300 text-[#4f4b2b]'><AiFillTwitterCircle size={20}/> </li>
     <li className=' cursor-pointer p-2 hover:bg-[#e5e2cf] rounded-sm duration-300 text-[#4f4b2b]'><AiOutlineWhatsApp size={20}/> </li>
     <li className=' cursor-pointer p-2 hover:bg-[#e5e2cf] rounded-sm duration-300 text-[#4f4b2b]'><AiFillQqCircle size={20}/> </li>
     </ul>

    </div>

    <img src='https://i.pinimg.com/236x/02/66/00/0266002e9a14ffba6ed0685837b0ecf8.jpg' className=' rounded-[90%] w-[250px]' alt='##'></img>

    </div>

    <div className='flex justify-around items-center flex-wrap mt-10  p-5'>
    <img src='https://i.pinimg.com/564x/80/d2/a3/80d2a31e477b4e16319a786bf157aa46.jpg' className='sm:w-[400px] sm:h-[400px] w-[300px] h-[250px]   rounded-[50%]'></img>
    <div className=' text-end'>
      <h2 className='text-[20px]  font-bold '>تجربة كاملة     </h2>
       <p className='text-[20px] font-light'>بأجواء متناغمة وبخدمة كلها رفاهية، اكاتسكي يعيّشك تجربة فاين دايننج استثنائية</p>
    </div>
    </div>

    <div className='flex justify-evenly items-center flex-wrap-reverse mt-10  p-5'>
    <div className=' text-end'>
      <h2 className='text-[20px] font-bold'> رامن </h2>
       <p className='text-[20px] font-thin'>محضرة من مزيج واسلوب  يباني  خاص،  ويكون جاهز في اسرع وقت لتستمتع به       </p>
    </div>
    <img src='https://i.pinimg.com/564x/0a/e7/37/0ae737fcfe502a6b8fb9fdb92c5d46a5.jpg' className='sm:w-[400px] sm:h-[400px] w-[300px] h-[250px]  rounded-[50%]'></img>
    </div>


    <div className='flex justify-around items-center flex-wrap mt-10 mb-6 p-5'>
    <img src='https://i.pinimg.com/564x/44/21/c4/4421c4f5aa151169fcc62f5ea60b87da.jpg' className='sm:w-[400px] sm:h-[400px] w-[300px] h-[250px]   rounded-[50%]'></img>
    <div className=' text-end'>
      <h2 className='text-[20px] font-bold'>  حجز ولا أسهل      </h2>
       <p className='text-[20px] font-extralight'> بخطوات سهلة احجز طاولتك واترك لنا ترتيب تفاصيل استقبالك!       </p>
    </div>
    </div>


<div className=' border-t border-y-emerald-950 mt-10'> 
<h2 className=' font-extralight text-[25px] '> ما التالي </h2>
<div className=' flex flex-row flex-wrap p-5 justify-center'>
<a href='/menu' className='m-5  hover:bg-black duration-500 hover:text-red-700 bg-[#eef1f1] font-sans rounded-lg'>
<div className='  sm:w-[330px] w-[250px] p-5  border  '>  
<p className=' font-bold text-[19px] border-b border-y-emerald-950 flex justify-between items-center p-2'>  <AiOutlineBars/>  استعراض القائمه  </p>
<p className='text-[18px] font-extralight'> هنا سوف تجد قائمه الطعام كامله لكي تختار منها ما تريد بكل سهوله واريحيه تامه  سوف تجد اصناف كثيره للاختيار بينهم </p>
</div>
</a>

<a href='Reservations' className='m-5  hover:bg-black duration-500 hover:text-red-700 bg-[#eef1f1] font-sans rounded-lg'>
<div className=' sm:w-[330px] w-[250px]  p-5  border   '>  
<p className=' font-bold text-[19px] border-b border-y-emerald-950 flex justify-between items-center p-2'>  <AiOutlineCarryOut/>  احجز طاوله </p>
<p className='text-[18px] font-extralight'>  السهوله في حجز الطاولات هي اهم شئ عندنا لكي نرضيك وفرنا لك امكانيه حجز الطاوله اونلاين  من بيتك تحجز طاوله  </p>
</div>
</a>

<a href='profile' className='m-5  hover:bg-black duration-500 hover:text-red-700 bg-[#eef1f1] font-sans rounded-lg'>
<div className=' sm:w-[330px] w-[250px]  p-5  border   '>  
<p className=' font-bold text-[19px] border-b border-y-emerald-950 flex justify-between items-center p-2'>  <AiOutlineUser/>  حسابك </p>
<p className='text-[18px] font-extralight'> معلوماتك التي سجلتها سوف تجدها هنا الرجاء التاكد من انها صحيحه  </p>
</div>
</a>
</div>
</div>

    </div>
  )
}

export default Detail