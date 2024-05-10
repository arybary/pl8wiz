import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { GasInfo } from "../model/GasInfo";

export const gasAdapter = createEntityAdapter<GasInfo>();

const initialState = gasAdapter.getInitialState();

const gasSlice = createSlice({
  name: "gas",
  initialState,
  reducers: {
    addGas: gasAdapter.addOne,
    removeGas: gasAdapter.removeOne,
    updateGas: gasAdapter.updateOne,
  },
});

export const { addGas, removeGas, updateGas } = gasSlice.actions;

export default gasSlice.reducer;
