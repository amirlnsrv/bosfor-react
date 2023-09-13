import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    visibleForm: false,
  },
  reducers: {
    openModal(state) {
      state.visibleForm = true;
    },
  },
});

export default modalSlice.reducer;

export const { openModal } = modalSlice.actions;
