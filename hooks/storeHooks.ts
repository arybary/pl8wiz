import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { AppDispatch, RootState } from "@/store";
import {
  logout,
  singIn,
  singUp,
  userAuthStateListener,
} from "@/store/thunk/authThunk";
import { addCarAction, getCarsAction } from "@/store/thunk/carsThunk";
import { loadingUserState } from "@/store/slice/authSlice";
import { addGasAction, getGasesAction } from "@/store/thunk/gasThunk";
import { removeGas, updateGasData,removeAllGases } from "@/store/slice/gasSlice";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();

  return bindActionCreators(
    {
      addGasAction,
      getGasesAction,
      removeGas,
      updateGasData,
      removeAllGases,
      singIn,
      singUp,
      logout,
      userAuthStateListener,
      loadingUserState,
      getCarsAction,
      addCarAction    
    },
    dispatch,
  );
};
