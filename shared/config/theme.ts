import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");

export const SPACING = 12

export const Fonts = {
  regular: {
    fontFamily: "FiraSans-Regular",
  },
  semibold: {
    fontFamily: "FiraSans-SemiBold",
  },
  beer:{
    fontFamily: "BeerMoney",
  }
};

export const Colors = {
  black: "#16171D",
  blackLight: "#1E1F29",
  gray: "#AFB2BF",
  grayLight: "#DAD9DE",
  yellowLight: "#f5f3a4",
  green: "#5b9e4d",
  violetDark: "#2E2D3D",
  primary: "#6C38CC",
  primaryHover: "#452481",
  link: "#75178a",
  white: "#FAFAFA",
  red: "#CC384E",
  border: "#4D5064",
  secondary: "#E47AD5",
};
