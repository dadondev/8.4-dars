import { configureStore } from "@reduxjs/toolkit";
import app from "./appSlice";

const store = configureStore({
  reducer: app.reducer,
});
export default store;
