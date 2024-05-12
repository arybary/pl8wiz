import { RootState } from "..";
import { createSelector } from "@reduxjs/toolkit";
import { gasAdapter } from "../slice/gasSlice";
import { carsAdapter } from "../slice/carsSlice";

export const selectAuthState = (state: RootState) => state.auth;
export const selectCarsState = (state: RootState) => state.cars;

export const selectUser = createSelector(
  selectAuthState,
  (authState) => authState.currentUser,
);

export const selectUserLoading = createSelector(
  selectAuthState,
  (authState) => authState.loading,
);

export const selectUserError = createSelector(
  selectAuthState,
  (authState) => authState.error,
);

export const { selectAll: selectAllCars, selectById: selectCarById } =
  carsAdapter.getSelectors((state: RootState) => state.cars);


export const { selectAll: selectAllGas, selectById: selectGasById } =
  gasAdapter.getSelectors((state: RootState) => state.gas);
