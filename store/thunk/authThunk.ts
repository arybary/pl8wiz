import { FIREBASE_AUTH} from "../../firebaseConfig";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setErrorState, setUserState } from "../slice/authSlice";
import { removeAllCars } from "../slice/carsSlice";
import { getCarsAction } from "./carsThunk";


const auth = FIREBASE_AUTH;


export const userAuthStateListener = createAsyncThunk(
  "auth/userAuthStateListener",
  async (_, { dispatch }) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("lisener", user);
        const { uid, displayName,email, photoURL } = user;
        dispatch(getCarsAction(uid))
        return dispatch(
          setUserState({
            currentUser: { uid, displayName, email,photoURL },
            loaded: false,
          }),
        );
      } else {
        dispatch(setUserState({ currentUser: null, loaded: false }));
      }
    });
  },
);



export const singIn = createAsyncThunk(
  "auth/registerUser",
  async (
    { email, password }: { email: string; password: string },
    { dispatch },
  ) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log("singin", user);
    } catch (error) {
      dispatch(setErrorState({ error, loaded: true }));
    }
  },
);

export const singUp = createAsyncThunk(
  "auth/register",
  async (
    {
      email,
      password,
      firstName,
      lastName,
    }: { email: string; password: string; firstName: string; lastName: string },
    { rejectWithValue },
  ) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      updateProfile(user, { displayName: `${firstName} ${lastName}` });
      return user;
    } catch (error) {
      console.log(error);
      return rejectWithValue("User already exists");
    }
  },
);

export const logout = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue,dispatch }) => {
    try {
      await signOut(auth);  dispatch(removeAllCars())
    } catch (error) {
      console.error("Logout error:", error);
      return rejectWithValue(error);
    }
  },
);

export const signInWithGoogle = createAsyncThunk(
  "auth/signInWithGoogle",
  async (_, { rejectWithValue }) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Вход выполнен успешно, получаем информацию о пользователе
        const user = result.user;
        console.log("Successfully signed in with Google:", user);
      })
      .catch((error) => {
        // Ошибка при входе
        console.error("Error signing in with Google:", error);

        rejectWithValue(error);
      });
  },
);

export const signUpWithGoogle = createAsyncThunk(
  "auth/signUpWithGoogle",
  async (_, { rejectWithValue }) => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      return result.user;
    } catch (error) {
      console.error("Error signing up with Google: ", error);
      return rejectWithValue(error);
    }
  },
);