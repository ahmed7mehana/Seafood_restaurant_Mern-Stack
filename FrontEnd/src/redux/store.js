import { configureStore } from "@reduxjs/toolkit";
import { profileReducer } from "./Slice/user";
import { authReducer } from "./Slice/authSlice";
import { MealReducer } from "./Slice/MealSlice";
import { reservReducer } from "./Slice/reserv";


const store=configureStore({
    reducer:{
profile:profileReducer,
auth: authReducer,
meal:MealReducer,
RVS:reservReducer,

    }
})


export default store