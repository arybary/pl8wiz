import {
  StyleSheet,
  Text,
  Image,
  ImageSourcePropType,
  View,
} from "react-native";
import { Link } from "expo-router";
import { LinkProps } from "expo-router/build/link/Link";
import { Colors, Fonts} from "../config/theme";
import { SvgProps } from "react-native-svg";
import React from "react";

interface CustomLinkProps extends LinkProps {
  text: string;
  iconPath?: ImageSourcePropType;
  iconSvg?: (props: SvgProps) => React.ReactNode;
}

export function CustomLink({
  text,
  iconSvg,
  style,
  iconPath,
  ...props
}: CustomLinkProps) {
  let iconSource: ImageSourcePropType | null = null;

  if (iconPath) {
    iconSource = iconPath;
  }

  return (
    <Link {...props}>
      <View style={styles.link}>
        {iconSvg && iconSvg(styles.icon)}
        {iconSource && (
          <Image style={styles.icon} source={iconSource} resizeMode="center" />
        )}
        <Text style={styles.text}>{text}</Text>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  link: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    gap: 15,
    borderRadius: 20,
    borderWidth:4,
    backgroundColor: Colors.green,
  },
  icon: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 20,
    color: Colors.white,
    ...Fonts.semibold,
  },
});
