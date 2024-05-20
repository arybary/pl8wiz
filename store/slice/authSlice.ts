import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../model/IUser";

interface AuthState {
  currentUser: IUser | null;
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
    loadingUserState: (state) => {
      state.currentUser = null;
      state.loading = true;
      state.error = null;
    },
    setUserState: (state, { payload }) => {
      state.currentUser = payload.currentUser;
      state.loading = false;
    },
    setErrorState: (state, { payload }) => {console.log('err',payload)
      state.error = payload.error;
      state.loading = false;
    },
  },
});

export const { loadingUserState, setUserState, setErrorState } =
  authSlice.actions;

export default authSlice.reducer;
