import {
  createEntityAdapter,
  createSlice, 
} from "@reduxjs/toolkit";
import {ICar} from "../../model/ICar";

export const carsAdapter = createEntityAdapter<ICar>();

const initialState = carsAdapter.getInitialState();

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    addCarData: carsAdapter.addOne,
    addCarsData: carsAdapter.addMany,
    removeCar: carsAdapter.removeOne,
    updateCar: carsAdapter.updateOne,
    removeAllCars:carsAdapter.removeAll
  },
});

export const { addCarData, removeCar, updateCar, addCarsData ,removeAllCars} =
  carsSlice.actions;

export default carsSlice.reducer;
