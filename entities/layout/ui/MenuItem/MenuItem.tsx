import { Colors, Fonts } from "@/shared/config/theme";
import { DrawerContentComponentProps } from "@react-navigation/drawer/lib/typescript/src/types";
import React from "react";
import { ReactNode, useState } from "react";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface MenuItemProps {
  drawer: DrawerContentComponentProps;
  icon: ReactNode;
  text: string;
  path: string;
}

export function MenuItem({
  drawer,
  icon,
  text,
  path,
  ...props
}: MenuItemProps & PressableProps) {
  const [clicked, setClicked] = useState<boolean>(false);
  const isActive = drawer.state.routes[drawer.state.index].name === path;

  return (
    <Pressable
      {...props}
      onPress={() => drawer.navigation.navigate(path)}
      onPressIn={() => setClicked(true)}
      onPressOut={() => setClicked(false)}
    >
      <View
        style={{
          ...styles.menu,
          borderColor: isActive ? Colors.black : Colors.primaryHover,
          backgroundColor:
            clicked || isActive ? Colors.primary : Colors.blackLight,
        }}
      >
        {icon}
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  menu: {
    flexDirection: "row",
    gap: 20,
    borderRadius:20,
    borderEndColor:Colors.black,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRightWidth: 10,
    borderLeftWidth: 10,
    borderBottomWidth:10,
    alignItems: "center",
  },
  text: {
    color: Colors.white,
    fontSize: 16,
    ...Fonts.regular,
  },
});
