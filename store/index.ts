import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import carsReducer from "./slice/carsSlice";
import gasReducer from "./slice/gasSlice";
import authReducer from "./slice/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  cars: carsReducer,
  gas: gasReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
