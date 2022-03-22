import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  message: "",
  show: false,
  status: "",
  duration: 500,
};

export const NotiSlice = createSlice({
  name: "noti",
  initialState: INITIAL_STATE,
  reducers: {
    SHOW_NOTI: (state, action) => {
      state.show = true;
      state.message = action.payload.message;
      state.status = action.payload.status;
      state.duration = action.payload.duration;
    },
    HIDE_NOTI: (state) => {
      state.show = false;
    },
  },
});

export const { SHOW_NOTI, HIDE_NOTI } = NotiSlice.actions;

export default NotiSlice.reducer;
