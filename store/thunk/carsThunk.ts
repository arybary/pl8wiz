import { addCar, getCars } from "@/shared/api/firebaseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICar } from "../../model/ICar";
import { addCarData, addCarsData } from "../slice/carsSlice";

export const addCarAction = createAsyncThunk(
  "cars/addCar",
  async (
    { car, uid }: { car: ICar; uid: string },
    { rejectWithValue, dispatch },
  ) => {
    try {
      addCar(uid, car).then((car) => dispatch(addCarData(car)));
    } catch (error) {
      console.error("Error adding car: ", error);
      return rejectWithValue(error);
    }
  },
);

export const getCarsAction = createAsyncThunk(
  "car/getCars",
  async (uid: string, { rejectWithValue, dispatch }) => {
    try {
      getCars(uid).then((cars) => dispatch(addCarsData(cars)));
    } catch (error) {
      console.error("Failed to get cars: ", error);
      return rejectWithValue(error);
    }
  },
);
