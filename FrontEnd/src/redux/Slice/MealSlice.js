import { createSlice } from "@reduxjs/toolkit";

const MealSlice = createSlice({
  name: "meal",
  initialState: {
    Meals: [],
    MealsCount: null,
    MealsCate: [],
    loading: false,
    isMealCreated: false,
    Meal:null,
  },
  reducers: {
    setMeals(state, action) {
      state.Meals = action.payload;
    },
    setMealsCount(state, action) {
      state.MealsCount = action.payload;
    },
    setMealsCate(state, action) {
      state.MealsCate = action.payload;
    },
    setLoading(state) {
      state.loading = true;
    },
    clearLoading(state) {
      state.loading = false;
    },
    setIsMealCreated(state) {
      state.isMealCreated = true;
      state.loading = false;
    },
    clearIsMealCreated(state) {
      state.isMealCreated = false;
    },
    setMeal(state,action) {
      state.Meal = action.payload;
    },
    deleteMeal(state,action) {
      state.Meals = state.Meals.filter((p)=> p._id === action.payload);
    },

  },
});

const MealReducer = MealSlice.reducer;
const MealActions = MealSlice.actions;

export { MealActions, MealReducer };
