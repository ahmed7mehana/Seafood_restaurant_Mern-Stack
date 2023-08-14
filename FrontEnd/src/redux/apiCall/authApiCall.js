import { toast } from "react-toastify";
import { authActions } from "../Slice/authSlice";
import request from "../../Utils/request";

// Login User
export function loginUser(user) {
    return async (dispatch) => {
      try {
        const { data } = await request.post("/api/auth/login",user);
        dispatch(authActions.login(data));
        localStorage.setItem("userInfo", JSON.stringify(data));
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error.response.data.message)

      }
    }
}

// Logout User
export function logoutUser() {
  return (dispatch) => {
    dispatch(authActions.logout());
    localStorage.removeItem("userInfo");
  }
}

// Register User
export function registerUser(user) {
  return async (dispatch) => {
    try {
      dispatch(authActions.setLoading());
      const { data } = await request.post("/api/auth/register",user);
      dispatch(authActions.register(data.message));
    } catch (error) {
      toast.error(error.response.data.message);
      // console.log(error.response.data.message)

    }
  }
}


// Verify Email
export function verifyEmail(userId,token) {
  return async (dispatch) => {
    try {
      await request.get(`/api/auth/${userId}/verify/${token}`);
      dispatch(authActions.setIsEmailVerified());
    } catch (error) {
      console.log(error);
    }
  }
}