import { configureStore } from "@reduxjs/toolkit";
import app from "./appSlice";

const store = configureStore({
  reducer: app.actions,
});
export default store;
