import { addGasRefueling, getGasRefueling } from "@/shared/api/firebaseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IGas } from "@/model/IGas";
import { addGasData, addGasesData } from "../slice/gasSlice";
import { RootState } from "..";

export const addGasAction = createAsyncThunk(
  "gas/addGas",
  async (
    { uid, id, gas }: { uid: string; id: string; gas: IGas },
    { rejectWithValue, dispatch },
  ) => {
    try {
      addGasRefueling(uid, gas, id).then((gas) => dispatch(addGasData(gas)));
    } catch (error) {
      console.error("Error adding car: ", error);
      return rejectWithValue(error);
    }
  },
);

export const getGasesAction = createAsyncThunk(
  "gas/getGases",
  async (carNumber: string, { rejectWithValue, dispatch, getState }) => {
    try {
      const state = getState() as RootState;
      const {
        auth: { currentUser },
      } = state;
      if (currentUser)
        getGasRefueling(currentUser.uid, carNumber).then((gases) =>
          dispatch(addGasesData(gases)),
        );
    } catch (error) {
      console.error("Failed to get cars: ", error);
      return rejectWithValue(error);
    }
  },
);
