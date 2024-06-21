import { Redirect } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import { selectUser } from "../../store/selectors/index.";
import { useEffect } from "react";
import { useActions, useTypedSelector } from "@/hooks/storeHooks";
import { MenuButton } from "@/features/layout/ui/MenuButton";
import { CustomDrawer } from "@/widget/layout/ui/CustomDrawer/CustomDrawer";
import { Colors, Fonts } from "@/shared/config/theme";
import { ExitButton } from "@/features/layout/ui/ExitButton";
import { Avatar } from "@/entities/user/ui/Avatar/Avatar";
import React from "react";

export default function AppLayout() {
  const { userAuthStateListener } = useActions();

  const user = useTypedSelector(selectUser);

  useEffect(() => {
    console.log("hello", user);
    userAuthStateListener();
  }, []);

  if (!user) {
    return <Redirect href="/login" />;
  }
  const { displayName, photoURL } = user;
  return (
    <GestureHandlerRootView style={styles.wrapper}>
      <Drawer
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: Colors.blackLight,
            shadowColor: Colors.blackLight,
            shadowOpacity: 0,
          },
          headerLeft: () => {
            return <MenuButton navigation={navigation} />;
          },
          headerRight: () => {
            return (
              <View style={styles.container}>
                <Avatar style={styles.avatar} image={photoURL as string} />
                <ExitButton navigation={navigation} />
              </View>
            );
          },
          headerTitleStyle: {
            color: Colors.white,
            ...Fonts.regular,
            fontSize: 20,
          },
          headerTitleAlign: "left",
          sceneContainerStyle: {
            backgroundColor: Colors.grayLight,
          },
        })}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: displayName,
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            title: "Профиль",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    gap: 10,
  },
  container: { flexDirection: "row" },
  avatar: { marginLeft: 10, height: 30, width: 30, borderRadius: 20 },
});
