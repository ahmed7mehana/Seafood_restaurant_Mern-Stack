import request from "../../Utils/request";
import { toast } from "react-toastify";
import { MealActions } from "../Slice/MealSlice";



// Create meal  {done}
export function createMeal(newMeal) {
  return async (dispatch, getState) => {
    try {
      dispatch(MealActions.setLoading());
      await request.post(`/api/meal`, newMeal, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
          "Content-Type": "multipart/form-data",
        },
      });

      dispatch(MealActions.setIsMealCreated());
      setTimeout(() => dispatch(MealActions.clearIsMealCreated()), 2000); // 2s
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(MealActions.clearLoading());
    }
  };
}


// Update meal Image  {done}
export function updateMealImage(newImage,MealId) {
  return async (dispatch,getState) => {
    try {
      await request.put(`/api/meal/updateimage/${MealId}`, newImage, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
          "Content-Type":"multipart/form-data",
        }
      });
      toast.success("New Meal image uploaded successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

 
// Update meal  {done}
export function updateMeal(newMeal,MealId) {
  return async (dispatch,getState) => {
    try {
      const { data } = await request.put(`/api/meal/updateMeal/${MealId}`, newMeal, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        }
      });
      dispatch(MealActions.setMeal(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// Delete Meal    {done}  @TODO==> it delete all items i need to del one item 
export function deleteMeal(MealId) {
  return async (dispatch,getState) => {
    try {
      const { data } = await request.delete(`/api/meal/${MealId}`, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        }
      });
      dispatch(MealActions.deleteMeal(data.MealId));
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}



// Get All Meals {done}
export function getAllMeals() {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/meal`);
      dispatch(MealActions.setMeals(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
