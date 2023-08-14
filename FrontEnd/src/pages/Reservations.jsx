import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createReserv } from '../redux/apiCall/reservApiCall';
import { ToastContainer, toast } from 'react-toastify';

function Reservations() {


  const navigate=useNavigate()
  const dispatch = useDispatch();

//guest
const [guest,setGuest]=useState("")
const [time,setTime]=useState("")
const [notice, setNotic]=useState("")


const { user} = useSelector(state => state.auth);
let userID=user._id


const handlesubmet=()=>{
  if(guest.trim() === "") return toast.error("guest is required");
  if(time.trim() === "") return toast.error("time is required");
    dispatch(createReserv({guest,time,notice,userID}));
    setTimeout(()=>{window.location.reload()}, 100)
    navigate('/profile')
  };


  return (
    <div   className='h-screen  bg-no-repeat bg-cover mt-10'    style={{ backgroundImage: "url('https://images.pexels.com/photos/4449785/pexels-photo-4449785.jpeg?auto=compress&cs=tinysrgb&w=1400')" }}
    >
            <ToastContainer />
    <div className='  flex flex-col mt-8  absolute left-[50%]  top-[50%] translate-x-[-50%] translate-y-[-50%] transform '>

    <label for="lname" className=' text-end p-3 font-bold text-[20px]'> عدد الضيوف </label>
        <input type='number' placeholder='1 ?' value={guest} onChange={(e)=>setGuest(e.target.value)}  className='px-10 p-3 w-[90%] sm:w-[500px] rounded-lg' />
    <label for="lname" className=' text-end p-3 font-bold text-[20px]'> الوقت </label>
        <input type='time' value={time} onChange={(e)=>setTime(e.target.value)}  className='px-10 p-3 w-[90%] sm:w-[500px] rounded-lg' />
    <label for="lname" className=' text-end p-3 font-bold text-[20px]'>ملاحظات </label>
    <textarea value={notice}  onChange={(e)=>setNotic(e.target.value)}  className='px-10 p-3  w-[90%]     sm:w-[500px] min-h-[250px] rounded-lg mb-5'/>

    <div className=' flex flex-row m-auto items-center justify-center bg-[#e5e2cf] rounded-lg p-1'>
    <p className=''>أوافق على أحكام الحجز وسياسة الزي ودخول الصغار    </p>
    <input type='checkbox' />
    </div>

    <button onClick={handlesubmet} className='p-2 px-10 rounded-lg w-fit m-auto bg-red-400 text-black hover:text-red-400 hover:bg-black duration-300 font-bold'> الحجز </button>
    </div>
    </div>
  )
}

export default Reservations