import authReducer from "@redux/auth/auth-reducer";
import { combineReducers } from "@reduxjs/toolkit";

export default combineReducers({
  auth: authReducer,
});
