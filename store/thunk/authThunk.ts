import { FIREBASE_AUTH } from "../../firebaseConfig";
import {
  GoogleAuthProvider,
  OAuthCredential,
  UserCredential,
  createUserWithEmailAndPassword,
  getRedirectResult,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  loadingUserState,
  setErrorState,
  setUserState,
} from "../slice/authSlice";
import { removeAllCars } from "../slice/carsSlice";
import { getCarsAction } from "./carsThunk";
import { removeAllGases } from "../slice/gasSlice";
import { FirebaseError } from "firebase/app";

const auth = FIREBASE_AUTH;
const provider = new GoogleAuthProvider();

export const userAuthStateListener = createAsyncThunk(
  "auth/userAuthStateListener",
  async (_, { dispatch }) => {
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("lisener", user);
        const { uid, displayName, email, photoURL } = user;
        dispatch(getCarsAction(uid));
        return dispatch(
          setUserState({
            currentUser: { uid, displayName, email, photoURL },
            loaded: false,
          }))
      } else {
        dispatch(setUserState({ currentUser: null }));
      }
    });
  },
);

export const singIn = createAsyncThunk(
  "auth/singInUser",
  async (
    { emailForEnter, password }: { emailForEnter: string; password: string },
    { dispatch },
  ) => {
    dispatch(loadingUserState());
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        emailForEnter,
        password,
      );
      console.log("singin", user);
      const { uid, displayName, email, photoURL } = user;
      dispatch(
        setUserState({ currentUser: { uid, displayName, email, photoURL } }),
      );
    } catch (error) {
      const text =
        error instanceof FirebaseError
          ? `Помилка Firebase: ${error.code}, ${error.message}`
          : `Помилка неочікувана: ${error}`;
      dispatch(setErrorState({ error: text }));
    }
  },
);

export const singUp = createAsyncThunk(
  "auth/singUpUser",
  async (
    {
      emailForRegister,
      password,
      firstName,
      lastName,
      image,
    }: {
      emailForRegister: string;
      password: string;
      firstName: string;
      lastName: string;
      image: string | null;
    },
    { dispatch },
  ) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        emailForRegister,
        password,
      );
      updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
        photoURL: image,
      });
      const { uid, displayName, email, photoURL } = user;
      dispatch(
        setUserState({ currentUser: { uid, displayName, email, photoURL } }),
      );
    } catch (error) {
      const text =
        error instanceof FirebaseError
          ? `Помилка  Firebase: ${error.code}, ${error.message}`
          : `Помилка неочікувана: ${error}`;
      dispatch(setErrorState({ error: text }));
    }
  },
);

export const logout = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue, dispatch }) => {
    dispatch(loadingUserState());
    try {
      await signOut(auth)
     
      dispatch(removeAllCars());
      dispatch(removeAllGases());
      dispatch(setUserState({currentUser:null}));
    } catch (error) {
      const text =
        error instanceof FirebaseError
          ? `Помилка Firebase: ${error.code}, ${error.message}`
          : `Помилка неочікувана: ${error}`;
      dispatch(setErrorState({ error: text }));
    }
  },
);

export const signInWithGoogle = createAsyncThunk(
  "auth/signInWithGoogle",
  async (_, { rejectWithValue, dispatch }) => {
    const provider = new GoogleAuthProvider();
    getRedirectResult(auth)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(
          result as UserCredential,
        );
        const token = (credential as OAuthCredential).accessToken;

        const user = (result as UserCredential).user;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  },
);

export const signUpWithGoogle = createAsyncThunk(
  "auth/signUpWithGoogle",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { user } = await signInWithPopup(auth, provider);
      return user;
    } catch (error) {
      const text =
        error instanceof FirebaseError
          ? `Помилка Firebase: ${error.code}, ${error.message}`
          : `Помилка неочікувана: ${error}`;
      dispatch(setErrorState({ error: text }));
    }
  },
);
