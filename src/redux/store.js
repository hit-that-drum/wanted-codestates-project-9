import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./slice";

export default configureStore({
  reducer: {
    userData: userDataReducer,
  }
});