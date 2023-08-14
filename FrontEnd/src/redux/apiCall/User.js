import { toast } from "react-toastify";
import request from "../../Utils/request";
import { authActions } from "../Slice/authSlice";
import {profileActions} from "../Slice/user"







// Get User Profile                               {Done}
export function getUserProfile(userId) {
    return async (dispatch) => {
      try {
        const { data } = await request.get(`/api/user/profile/${userId}`);
        dispatch(profileActions.setProfile(data));
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
  }


  // Update Profile
  export function updateProfile(userId,profile) {
    return async (dispatch, getState) => {
      try {
        const { data } = await request.put(
          `/api/user/profile/${userId}`,
          profile,
        {
            headers: {
              Authorization: "Bearer " + getState().auth.user.token,
            },
          }
        );
  
        dispatch(profileActions.updateProfile(data));
        // dispatch(authActions.setUsername(data.username));
  
        // modify the user in local storage with new username
        const user = JSON.parse(localStorage.getItem("userInfo"));
        user.username = data?.username;
        localStorage.setItem("userInfo", JSON.stringify(user));
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
  }
  
  // Delete Profile (Account)                     {Done}
  export function deleteProfile(userId) {
    return async (dispatch, getState) => {
      try {
        dispatch(profileActions.setLoading());
        const { data } = await request.delete(
          `/api/user/profile/${userId}`,
          {
            headers: {
              Authorization: "Bearer " + getState().auth.user.token,
            },
          }
        );
  
        dispatch(profileActions.setIsProfileDeleted());
        toast.success(data?.message);
        setTimeout(() => dispatch(profileActions.clearIsProfileDeleted()), 2000);
      } catch (error) {
        toast.error(error.response.data.message);
        dispatch(profileActions.clearLoading());
      }
    };
  }
  
  
  // Get All Users Profile (for admin dashboard)  {Done}
  export function getAllUsersProfile() {
    return async (dispatch, getState) => {
      try {
        const { data } = await request.get(
          `/api/user/`,
          {
            headers: {
              Authorization: "Bearer " + getState().auth.user.token,
            },
          }
        );
  
        dispatch(profileActions.setProfiles(data));
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
  }
  

    // MakeMeAdmin
    export function MakeMeAdmin(userId) {
      return async (dispatch, getState) => {
        try {
          const { data } = await request.put(`/api/user/MakeMeAdmin/${userId}`);
    
          dispatch(profileActions.updateProfile(data));
    
          // modify the user in local storage with new username
          const user = JSON.parse(localStorage.getItem("userInfo"));
          user.isAdmin = data?.isAdmin;
          localStorage.setItem("userInfo", JSON.stringify(user));
        } catch (error) {
          toast.error(error.response.data.message);
        }
      };
    }
    

   // RemoveMeAdmin
   export function RemoveMeAdmin(userId) {
    return async (dispatch, getState) => {
      try {
        const { data } = await request.put(`/api/user/RemoveMeAdmin/${userId}`);
  
        dispatch(profileActions.updateProfile(data));
  
        // modify the user in local storage with new username
        const user = JSON.parse(localStorage.getItem("userInfo"));
        user.isAdmin = data?.isAdmin;
        localStorage.setItem("userInfo", JSON.stringify(user));
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
  }
  