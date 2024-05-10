import {
    Pressable,
    StyleSheet,
    TextInput,
    TextInputProps,
    View,
    Text,
} from "react-native";
import { useState } from "react";
import EyeOpenedIcon from "../../assets/icons/eye-opened";
import EyeClosedIcon from "../../assets/icons/eye-closed";
import { TextProps } from "react-native-svg";
import { Colors, Fonts } from "../config/theme";

export function Input({
    isPassword,
    text,
    style,
    ...props
}: TextInputProps & TextProps & { text?: string; isPassword?: boolean }) {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    return (
        <View style={style}>
          {text && (
              <Text style={styles.title} {...props}>
                  {text}
              </Text>
          )}
          <TextInput
              style={styles.input}
              secureTextEntry={isPassword && !isPasswordVisible}
              placeholderTextColor={Colors.gray}
              {...props}
          />
          {isPassword && (
              <Pressable
                  onPress={() => setIsPasswordVisible((state) => !state)}
                  style={styles.eyeIcon}
              >
                  {isPasswordVisible ? <EyeOpenedIcon /> : <EyeClosedIcon />}
              </Pressable>
          )}
      </View>
  );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: Colors.link,
        ...Fonts.semibold,
    },
    input: {
      height: 50,
      backgroundColor: Colors.violetDark,
      paddingHorizontal: 24,
      borderRadius: 10,
        fontSize: 16,
        color: Colors.gray,
        ...Fonts.regular,
    },
    eyeIcon: {
        position: "absolute",
        right: 0,
        paddingHorizontal: 20,
        paddingVertical: 18,
    },
});
