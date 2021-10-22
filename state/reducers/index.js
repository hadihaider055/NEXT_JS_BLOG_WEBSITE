import { combineReducers } from "redux";
import authReducer from "./authReducer/index";

const reducers = {
  authReducer,
};

export default combineReducers(reducers);
