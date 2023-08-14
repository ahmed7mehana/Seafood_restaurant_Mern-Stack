import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MakeMeAdmin, RemoveMeAdmin, deleteProfile, getAllUsersProfile, getUserProfile  } from "../../redux/apiCall/User";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Users = () => {

const handleDeleteUser = (id) => {
dispatch(deleteProfile(id))
  };
  const navigate=useNavigate()

  
  const dispatch = useDispatch();
  const { profile, profiles, isProfileDeleted ,usersProfile } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getAllUsersProfile());
  }, [isProfileDeleted]);






  return (
      <>
      <div className="flex h-screen">
      <div className="flex-1 p-4 bg-gray-100">
        <div className="p-2 m-auto  mt-[100px]">
        <table className="table-auto  w-full ">
          <thead>
            <tr>
              <th className="px-2 py-1 sm:px-2 sm:py-2  text-[10px] sm:text-[16px] ">User</th>
              <th className=" hidden sm:table-cell text-[10px] sm:text-[16px] ">Email</th>
              <th className=" hidden sm:table-cell     ">date</th>
              <th className="sm:px-2 px-0 py-0 sm:py-2"></th>
              <th className="sm:px-2 px-0 py-0 sm:py-2"></th>
              <th className="sm:px-2 px-0 py-0 sm:py-2"></th>
            </tr>
          </thead>
          <tbody>
          {profiles.map((user) => (
    <>
    {user?.isAdmin?"":(
      <tr key={user.id}>
      <td className="border px-2 py-2  text-[10px] sm:text-[16px]">{user.username}</td>
      <td className="border hidden sm:table-cell     text-[10px] sm:text-[16px] ">{user.email}</td>
      <td className="border hidden sm:table-cell  text-[10px] sm:text-[16px]">{new Date(user?.createdAt).toDateString()}</td>

      <td className="border sm:px-2 px-1 py-1 sm:py-2 text-[10px] sm:text-[16px]">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold sm:px-2 px-1 py-1 sm:py-2 rounded"
          onClick={() => handleDeleteUser(user?._id)}
        >
          Delete
        </button>
      </td>

    <td className="border  text-[10px] sm:text-[16px]">
    <button
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-1 rounded"
      onClick={()=>dispatch(MakeMeAdmin(user?._id))}
    >
      ToAdmin
    </button>
  </td>



    </tr>
    )}
    </>

            ))}
          </tbody>
        </table>
      </div>
      <div className="p-2 relative  m-auto  w-[70%]  top-[10%]">
      <table className="table-auto   ">
        <thead>
          <tr>
            <th className="px-2 py-2">Admin</th>
            <th className="px-2 py-2 hidden sm:table-cell ">email</th>
            <th className="px-2 py-2"></th>
            <th className="px-2 py-2"></th>
          </tr>
        </thead>
        <tbody>
        {profiles.map((user) => (
  <>
  {user?.isAdmin?   (
    <tr key={user.id}>
    <td className="border sm:px-2 sm:py-2 p-1 text-[10px] sm:text-[16px]">{user.username}</td>
    <td className="border sm:px-2 sm:py-2 p-1 px-2 py-2 hidden sm:table-cell ">{user.email}</td>

    <td className="border sm:px-2 px-1 py-1 sm:py-2 text-[10px] sm:text-[16px]">
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 sm:px-2 sm:py-2 p-1 rounded"
        onClick={() => handleDeleteUser(user?._id)}
      >
        Delete
      </button>
    </td>
    <td className="border  text-[10px] sm:text-[16px]">
    <button
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-1 rounded"
      onClick={()=>dispatch(RemoveMeAdmin(user?._id))}
    >
      ToUser
    </button>
  </td>
  </tr>
  ):""}
  </>

          ))}
        </tbody>
      </table>
    </div>

      </div>
    </div>

     
      
      </>
  );
};

export default Users;
