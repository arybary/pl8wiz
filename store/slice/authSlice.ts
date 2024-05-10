import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../model/User";

interface AuthState {
  currentUser: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  currentUser: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    startUserState: (state) => {     
      state.loading = true
      state.error = null
    },
    setUserState: (state, { payload }) => {
      state.currentUser = payload.currentUser;
      state.loading = false
    },
    setErrorState: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});
export const { setUserState, setErrorState } = authSlice.actions;

export default authSlice.reducer;
