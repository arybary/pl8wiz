import { Image, Text, StyleSheet, View, TouchableOpacity, Platform } from "react-native";
import { BlurView, VibrancyView } from "@react-native-community/blur";
import ProgressBar from "./ProgressBar";

interface UploadProps {
  image: string;
  progress: number;
}

export function Uploading({ image, progress }: UploadProps) {
  return (
    <View
    style={[
      StyleSheet.absoluteFill,
      {
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
      },
    ]}
  >
    {Platform.OS === "ios" && (
      // VibrancyView is only supported on iOS
      //https://github.com/Kureev/react-native-blur#vibrancyview
      <VibrancyView
          blurType="ultraThinMaterialDark"
          style={StyleSheet.absoluteFill} blurAmount={0}      ></VibrancyView>
    )}

    <BlurView
      style={{
        width: "70%",
        // Some styles could  work oncorrectly on Android.
      }}
      blurType="dark"
    >
      <View
        style={{
          alignItems: "center",
          paddingVertical: 10,
          rowGap: 12,
          borderRadius: 14,
          backgroundColor: "#FFFFFF",
        }}
      >
        {image && (
          <Image
            source={{ uri: image }}
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
              borderRadius: 6,
            }}
          />
        )}
       
        <Text style={{ fontSize: 12 }}>Uploading...</Text>
        <ProgressBar progress={progress} />
        <View
          style={{
            height: 1,
            borderWidth: StyleSheet.hairlineWidth,
            width: "100%",
            borderColor: "#00000020",
          }}
        />
        <TouchableOpacity>
          <Text style={{ fontWeight: "500", color: "#3478F6", fontSize: 17 }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </BlurView>
  </View>
);
}