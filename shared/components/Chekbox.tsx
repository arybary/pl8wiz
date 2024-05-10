import React from "react";
import { Pressable, View, StyleProp, ViewStyle,StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

interface CheckboxProps {
  checked: boolean;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}

export function Checkbox({ checked, onPress, containerStyle }: CheckboxProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        checked ? styles.checkedBox : {},
        containerStyle,
      ]}
    >
      {checked ? <View style={styles.innerSquare} /> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: Colors.violetDark,
      borderRadius: 3,
      height: 18,
      width: 18,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 2,
    },
    innerSquare: {
      width: 10,
      height: 10,
      backgroundColor: Colors.violetDark,
    },
    checkedBox: {borderWidth: 2},
  });
  
 
  