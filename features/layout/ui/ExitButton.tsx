import { View, Pressable, PressableProps, StyleSheet } from "react-native";
import { useState } from "react";
import { Colors } from "@/shared/config/theme";
import { useActions } from "@/hooks/storeHooks";
import { Ionicons } from "@expo/vector-icons";

export function ExitButton({
  navigation,
  ...props
}: PressableProps & { navigation: any }) {
  const [clicked, setClicked] = useState<boolean>(false);
  const { logout } = useActions();

  return (
    <Pressable
      {...props}
      onPressIn={() => setClicked(true)}
      onPressOut={() => setClicked(false)}
      onPress={() => {
        logout();
      }}
    >
      <View
        style={{
          ...styles.button,
          backgroundColor: clicked ? Colors.violetDark : Colors.blackLight,
        }}
      >
        {clicked ? (
          <Ionicons name="exit" size={48} color="red" />
        ) : (
          <Ionicons name="exit-outline" size={24} color="white" />
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    flex: 1,
  },
});
