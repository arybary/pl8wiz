import WheelIcon from "@/assets/menu/wheelIcon";
import { useEffect } from "react";
import { Animated, StyleSheet } from "react-native";
import { height, width } from "../config/theme";
import React from "react";

interface AnimatedStyle {
  transform: { rotate: Animated.AnimatedInterpolation<string> }[];
}

export function Loader() {
  const rotateValue = new Animated.Value(0);

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ).start();
  }, [rotateValue]);

  const animatedStyle: AnimatedStyle = {
    transform: [{ rotate }],
  };

  return (
    <Animated.View style={[styles.activity, animatedStyle]}>
      <WheelIcon style={styles.wheel} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  activity: {
    flex: 1,
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
  },
  wheel: {
    width: 150,
    height: 150,
  },
});
