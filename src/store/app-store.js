import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils./store/user-slice";
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
