import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { AppDispatch, RootState } from "@/store";
import { addGas, removeGas, updateGas } from "@/store/slice/gasSlice";

import { createCarAction, getCarsAction } from "@/store/slice/carsSlice";
import { logout, signInWithGoogle, signUpWithGoogle, singIn, singUp, userAuthStateListener } from "@/store/thunk/authThunk";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();

  return bindActionCreators(
    {
      addGas,
      removeGas,
      updateGas,
      singIn,
      singUp,
      logout,
      userAuthStateListener,
      getCarsAction,createCarAction,
      signInWithGoogle,
      signUpWithGoogle
    },
    dispatch
  );
};
