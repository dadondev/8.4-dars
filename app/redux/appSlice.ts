import { createSlice } from "@reduxjs/toolkit";

const app = createSlice({
  name: "app",
  initialState: {
    found: false,
    data: {},
  },
  reducers: {
    giveData(state, { payload }) {
      if (payload?.id) {
        state.found = true;
        state.data = payload;
      } else {
        state.found = false;
      }
    },
  },
});

export default app;
