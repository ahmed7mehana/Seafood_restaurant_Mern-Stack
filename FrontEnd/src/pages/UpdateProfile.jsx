import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateProfile } from '../redux/apiCall/User';
import { AiFillCloseCircle } from "react-icons/ai";


function UpdateProfile({profile,update,setUpdate}) {
    const[username ,setUsername]=useState(profile.username)

    const dispatch = useDispatch();

    const updatehamdler=(e,id)=>{
        e.preventDefault();
        setUpdate(!update)
        dispatch(updateProfile(id,{username}));
      }


  return (
    <div className=' rounded-[20px] left-[50%]  top-[50%] translate-x-[-50%] translate-y-[-50%] transform w-[90%] h-[300px] fixed  bg-gradient-to-br from-red-500 to-black'
    >  
   <AiFillCloseCircle size={35} onClick={()=>setUpdate(!update)}/>
   <div className='absolute left-[50%]  top-[50%] translate-x-[-50%] translate-y-[-50%] transform'>
    <input className='p-3 rounded-[20px] sm:px-10' type='text' value={username}  onChange={(e) => setUsername(e.target.value)}/>
    <button onClick={(e)=>updatehamdler(e,profile._id)} className='m-1 bg-green-500 p-1 px-8 rounded-lg font-bold mt-10 hover:bg-red-500 duration-300 uppercase text-end'>Update</button>
   </div>
 

    </div>
  )
}

export default UpdateProfile