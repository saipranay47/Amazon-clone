import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

// global sstore setup
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
