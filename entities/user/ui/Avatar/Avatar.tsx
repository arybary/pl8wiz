import React from "react";
import { Image, ImageProps, StyleSheet } from "react-native";

interface AvatarProps extends ImageProps {
  image: string | null;
}

export function Avatar({ image, style, ...props }: AvatarProps) {
  return (
    <Image
      {...props}
      style={style}
      source={
        image
          ? {
              uri: image,
            }
          : require("../../../../assets/images/avatar.png")
      }
    />
  );
}
