import React, { useEffect, useState } from "react";
import { deleteReserv, getAllReserv } from "../../redux/apiCall/reservApiCall";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { AiFillCloseCircle } from "react-icons/ai";

const RvsDash = () => {

const dispatch = useDispatch();


const { Reservations ,isRvsDeleted } = useSelector((state) => state.RVS)

    useEffect(() => {
        dispatch(getAllReserv())
        if (isRvsDeleted) {
            setTimeout(()=>{window.location.reload()}, 1000);
          }
      }, [isRvsDeleted]);
     
  return (
    <div className="flex  ">
    <div className="flex-1 p-4 bg-gray-100">
<div className=" m-auto min-h-screen text-[10px] sm:text-[16px]    top-[10%] ">
   <div className="  flex-wrap  flex-row flex items-center justify-center  mt-[100px]">
   {Reservations.map((m)=> (
  <div key={m._id} className="border-2 p-3 m-3 bg-gradient-to-br from-red-300 to-green-400 rounded-[20px] ">
  <AiFillCloseCircle size={25} className=" cursor-pointer"  onClick={()=>{dispatch(deleteReserv(m._id))}}  />
  <div  className="w-[150px] sm:w-[250px] flex flex-col items-center justify-center ">
  <div className="">
  <h1> عددالضيوف :  {m.guest}</h1>
  <p>الوقت : {m.time}</p>
  {m?.notice?(
      <p> ملاحظات : {m.notice}</p>
  ):""}
   </div>
  </div>
  </div>
   ))}
   <ToastContainer />
   </div>
    </div>
    </div>
  </div>
  );
};

export default RvsDash;
