import { toast } from "react-toastify";
import request from "../../Utils/request";
import { reservActions } from "../Slice/reserv";

  





// Create meal  {done}
export function createReserv(newMeal) {
    return async (dispatch, getState) => {
      try {
        console.log(newMeal)
        await request.post(`/api/Reserv/`, newMeal
  
        )
      } catch (error) {
        toast.error(error.response.data.message);
        dispatch(reservActions.clearLoading());
      }
    };
  }


  //  {Done}
  export function deleteReserv(userId) {
    return async (dispatch, getState) => {
      try {        
        const { data } = await request.delete(
          `/api/Reserv/${userId}`);
        toast.success(data?.message);
        dispatch(reservActions.setisRvsDeleted());
        
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
  }
  //  {Done}
  export function getAllReserv() {
    return async (dispatch, getState) => {
      try {
        const { data } = await request.get(
          `/api/Reserv/`);
  
        dispatch(reservActions.setReservations(data));
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
  }
  


