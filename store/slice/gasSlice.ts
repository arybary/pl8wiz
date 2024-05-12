import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { IGas } from "../../model/IGas";

export const gasAdapter = createEntityAdapter<IGas>();

const initialState = gasAdapter.getInitialState();

const gasSlice = createSlice({
  name: "gas",
  initialState,
  reducers: {
    addGasData: gasAdapter.addOne,
    addGasesData: gasAdapter.addMany,
    removeGas: gasAdapter.removeOne,
    updateGasData: gasAdapter.updateOne,
  },
});

export const { addGasData, addGasesData, removeGas, updateGasData } =
  gasSlice.actions;

export default gasSlice.reducer;
