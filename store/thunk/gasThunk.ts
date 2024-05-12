import {
  addGasRefueling, 
  getGasRefueling,
} from "@/shared/api/firebaseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IGas } from "@/model/IGas";
import { addGasData, addGasesData } from "../slice/gasSlice";

export const addGasAction = createAsyncThunk(
  "gas/addGas",
  async (
    { uid, carNumber, gas }: { uid: string; carNumber: string; gas: IGas },
    { rejectWithValue, dispatch },
  ) => {
    try {
      addGasRefueling(uid, carNumber, gas).then((gas) =>
        dispatch(addGasData(gas)),
      );
    } catch (error) {
      console.error("Error adding car: ", error);
      return rejectWithValue(error);
    }
  },
);

export const getGasesAction = createAsyncThunk(
  "gas/getGases",
  async (
    { uid, carNumber }: { uid: string; carNumber: string },
    { rejectWithValue, dispatch },
  ) => {
    try {
      getGasRefueling(uid, carNumber).then((gases) =>
        dispatch(addGasesData(gases)),
      );
    } catch (error) {
      console.error("Failed to get cars: ", error);
      return rejectWithValue(error);
    }
  },
);
