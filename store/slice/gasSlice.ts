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
    removeAllGases: gasAdapter.removeAll,
  },
});

export const {
  addGasData,
  addGasesData,
  removeGas,
  updateGasData,
  removeAllGases,
} = gasSlice.actions;

export default gasSlice.reducer;
