import { Redirect } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { selectUser } from "../../store/selectors/index.";
import { useEffect } from "react";
import { useActions, useTypedSelector } from "@/hooks/storeHooks";
import { MenuButton } from "@/features/layout/ui/MenuButton/MenuButton";
import { CustomDrawer } from "@/widget/layout/ui/CustomDrawer/CustomDrawer";
import { Colors, Fonts } from "@/shared/config/theme";
import { FIREBASE_AUTH } from "@/firebaseConfig";

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
  const { displayName } = user;
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
          headerTitleStyle: {
            color: Colors.white,
            ...Fonts.regular,
            fontSize: 20,
          },
          headerTitleAlign: "center",
          sceneContainerStyle: {
            backgroundColor: Colors.black,
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
  },
});
