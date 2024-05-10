import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  EntityId,
  PayloadAction,
} from "@reduxjs/toolkit";
import { FIREBASE_DB } from "@/firebaseConfig";
import { CarInfo } from "../model/CarInfo";
import { addCar, getCars } from "@/shared/api/firebaseApi";

export const createCarAction = createAsyncThunk(
  "cars/addCar",
  async (
    { car, uid }: { car: CarInfo; uid: string },
    { rejectWithValue, dispatch },
  ) => {
    try {
      const carData = addCar(uid, car).then(car=>
      dispatch(addCarData(car)));
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

export const carsAdapter = createEntityAdapter<CarInfo>();

const initialState = carsAdapter.getInitialState();

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    addCarData: carsAdapter.addOne,
    addCarsData: carsAdapter.addMany,
    removeCars: carsAdapter.removeOne,
    updateCars: carsAdapter.updateOne,
    removeAllCars:carsAdapter.removeAll
  },
});

export const { addCarData, removeCars, updateCars, addCarsData ,removeAllCars} =
  carsSlice.actions;

export default carsSlice.reducer;
