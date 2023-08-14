import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../redux/apiCall/User';
import { logoutUser } from '../redux/apiCall/authApiCall';
import UpdateProfile from './UpdateProfile';
import { AiFillCloseCircle } from "react-icons/ai";
import { deleteReserv, getAllReserv, updateReserv } from '../redux/apiCall/reservApiCall';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';




function Profile() {
  const navigate=useNavigate()

  const dispatch = useDispatch();
    const { profile,loading,isProfileDeleted } = useSelector((state) => state.profile);
    const { user } = useSelector((state) => state.auth);
const { Reservations  } = useSelector((state) => state.RVS)
    let userID=user._id

    useEffect(() => {
      dispatch(getUserProfile(user._id));
      dispatch(getAllReserv())
      window.scrollTo(0, 0);
    }, [user._id]);
    
  const[update,setUpdate]=useState(false)



    // Logout Handler
    const logoutHandler = () => {
      dispatch(logoutUser());
      navigate("/")
    }
  



  return (
    <div>
    {profile?(
      <div className='min-h-[1500px] bg-cover bg-no-repeat'  style={{ backgroundImage: "url('https://images.pexels.com/photos/1907098/pexels-photo-1907098.jpeg?auto=compress&cs=tinysrgb&w=1500')" }}>
   <div className=' bg-black w-[90%] m-auto h-[400px] rounded-lg mt-[75px]  bg-cover bg-no-repeat' style={{ backgroundImage: "url('https://images.pexels.com/photos/903376/pexels-photo-903376.jpeg?auto=compress&cs=tinysrgb&w=1400')" }}>
   <div className=' flex flex-col items-center justify-center sm:p-8  bg-gradient-to-br from-blue-300 to-green-400  relative top-6 w-fit m-auto rounded-lg sm:font-bold'  >
   <h1 className=' '> Hi {profile?.username} we hope that yr day was good</h1>
   <p className=' '>Email : {profile?.email}</p>
   {profile?.phonMumber? <p className=' border-b m-2'>phon Number : {profile?.phonMumber}</p> :""}
   
  <p className=' '>join  : {new Date(profile?.createdAt).toDateString()}</p>
   </div>
   <button onClick={logoutHandler} className='m-1 bg-gradient-to-br from-blue-300 to-green-400 p-1 px-8 rounded-lg font-bold mt-10 hover:bg-red-500 duration-300 uppercase text-end'>log out</button>
   <button onClick={()=>setUpdate(!update)} className='m-1 bg-gradient-to-br from-blue-300 to-green-400 p-1 px-8 rounded-lg font-bold mt-10 hover:bg-red-500 duration-300 uppercase text-end'>Update</button>


{update?(
<UpdateProfile profile={profile} setUpdate={setUpdate} update={update} />
):""}
     </div>

<h2 className=' font-bold text-[30px] border-b uppercase mt-10'>reservation</h2>
<div className='flex-wrap  flex-row flex items-center justify-center '>
{Reservations.map((R)=> (
  <div  >
  {R.userID == user._id?(
  <div key={R._id} className="border-2 p-3 m-3 rounded-[20px]  bg-gradient-to-br from-red-500 to-green-400   "
  >
<AiFillCloseCircle size={25} className=" cursor-pointer"  onClick={()=>{
  dispatch(deleteReserv(R._id))
  setTimeout(()=>{window.location.reload()}, 500)
  }}  />
<div  className="w-[150px] sm:w-[250px] flex flex-col items-center justify-center ">
<div className="">
<h1> عددالضيوف :  {R.guest}</h1>
<p>الوقت : {R.time}</p>
{R?.notice?(
  <p> ملاحظات : {R.notice}</p>
):""}
</div>
</div>
</div>
  ):""}


  </div>
) )}
</div>


      </div>):(
      <>
      <a href="/login" className="header-right-link">
        <i className="bi bi-box-arrow-in-right"></i>
        <span>Login</span>
      </a>
      <a href="/register" className="header-right-link">
        <i className="bi bi-person-plus"></i>
        <span>Register</span>
      </a>
    </>
    )}

    </div>
  )
}

export default Profile