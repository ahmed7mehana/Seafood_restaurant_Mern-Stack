import { createSlice } from "@reduxjs/toolkit";

const reservSlice = createSlice({
   name: "reservation",
   initialState: {
    Reservation:null,
    Reservations: [],
    loading: false,
    isRvsDeleted:false,
   },
   reducers: {
    setReservation(state, action) {
        state.Reservation = action.payload;
      },
      updateReservation(state,action) {
        state.Reservation = action.payload;
      },
    setReservations(state,action) {
        state.Reservations = action.payload;
      },
      setLoading(state) {
        state.loading = true;
      },
      clearLoading(state) {
        state.loading = false;
      },
      setisRvsDeleted(state) {
        state.isRvsDeleted = true;
      },

   }
});

const reservReducer = reservSlice.reducer;
const reservActions = reservSlice.actions;

export { reservReducer, reservActions }