import {
  ActivityIndicator,
  Animated,
  GestureResponderEvent,
  ImageSourcePropType,
  Pressable,
  PressableProps,
  StyleSheet,
  Image,
  Text,
} from "react-native";
import { SvgProps } from "react-native-svg";
import { Colors, Fonts } from "../config/theme";

interface ButtonProps {
  iconSvg?: (props: SvgProps) => React.ReactNode;
  text?: string;
  iconPath?: ImageSourcePropType;
  isLoading?: boolean;
}

export function Button({
  iconSvg,
  text,
  iconPath,
  style,
  isLoading,
  ...props
}: PressableProps & ButtonProps) {
  let iconSource: ImageSourcePropType | null = null;

  if (iconPath) {
    iconSource = iconPath;
  }
  const animatedValue = new Animated.Value(100);
  const color = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [Colors.primaryHover, Colors.green],
  });

  const fadeIn = (e: GestureResponderEvent) => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 100,
      useNativeDriver: false,
    }).start();
    props.onPressIn && props.onPressIn(e);
  };

  const fadeOut = (e: GestureResponderEvent) => {
    Animated.timing(animatedValue, {
      toValue: 100,
      duration: 100,
      useNativeDriver: false,
    }).start();
    props.onPressOut && props.onPressOut(e);
  };

  return (
    <Pressable style={style} {...props} onPressIn={fadeIn} onPressOut={fadeOut}>
      <Animated.View
        style={{
          ...styles.button,
          backgroundColor: color,
        }}
      >
        {isLoading && iconSource && (
          <Image style={styles.icon} source={iconSource} resizeMode="center" />
        )}
        {!isLoading && iconSvg && iconSvg(styles.icon)}
        {!isLoading && <Text style={styles.text}>{text}</Text>}
        {isLoading && <ActivityIndicator size="large" color={Colors.white} />}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    backgroundColor: Colors.green,
  },
  logo: {
    width: 30,
    height: 30,
  },
  text: {
    color: Colors.white,
    fontSize: 16,
    ...Fonts.semibold,
  },
  icon: {
    width: 50,
    height: 50,
  },
});
