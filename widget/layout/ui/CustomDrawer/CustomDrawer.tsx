import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { View, StyleSheet, Image, ImageBackground } from "react-native";
import { UserMenu } from "../../../user/ui/UserMenu/UserMenu";
import ProfileIcon from "@/assets/menu/profile";
import WheelIcon from "@/assets/menu/wheelIcon";
import { CloseDrawer } from "@/features/layout/ui/CloseDrawer/CloseDrawer";
import { CustomLink } from "@/shared/components/CustomLink";
import { Colors } from "@/shared/config/theme";
import { useActions, useTypedSelector } from "@/hooks/storeHooks";
import { selectUser } from "@/store/selectors/index.";
import { MenuItem } from "@/entities/layout/ui/MenuItem/MenuItem";

const MENU = [
  { text: "Авто", icon: <WheelIcon />, path: "index" },
  { text: "Профиль", icon: <ProfileIcon />, path: "profile" },
];

export function CustomDrawer(props: DrawerContentComponentProps) {
  const user = useTypedSelector(selectUser);
  const { logout } = useActions();
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.scrollView}
    >      
      <ImageBackground
        source={require("@/assets/images/road.png")}
        style={styles.background}
      >
        <View style={styles.content}>
          <CloseDrawer {...props.navigation} />
          <UserMenu user={user} />
          {MENU.map((menu) => (
            <MenuItem key={menu.path} {...menu} drawer={props} />
          ))}
        </View>
        <View style={styles.footer}>
          <CustomLink text="Вихід" onPress={() => logout()} href={"/login"} />
          <Image
            style={styles.logo}
            source={require("../../../../assets/logo.png")}
            resizeMode="contain"
          />
        </View>
      </ImageBackground>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: "cover" },
  scrollView: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  content: {
    flex: 1,
  },
  footer: {
    gap: 50,
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    width: 160,
  },
});
