import {
  MediaTypeOptions,
  launchImageLibraryAsync,
  useMediaLibraryPermissions,
  PermissionStatus,
  launchCameraAsync,
  useCameraPermissions,
  ImagePickerResult,
  ImagePickerOptions,
} from "expo-image-picker";
import { Alert, StyleSheet, View, Text } from "react-native";
import UploadIcon from "../../assets/icons/upload";
import { Colors } from "../config/theme";
import { Button } from "./Button";
import React, { useEffect } from "react";

export interface UploadResponse {
  urls: {
    original: string;
    webP: string;
  };
}

interface ImageUploaderProps {
  name: string;
  onUpload: (uri: string) => void;
  onError: (error: string) => void;
}

export function ImageUploader({ onUpload, onError, name }: ImageUploaderProps) {
  const [libraryPermissions, requestLibraryPermission] = useMediaLibraryPermissions();
  const [cameraPermissions, requestCameraPermission] = useCameraPermissions();

  useEffect(() => {
    (async () => {
      const { status } = await requestLibraryPermission();
      if (status !== PermissionStatus.GRANTED) {
        onError("Недостаточно прав для доступа к медиатеке");
      }
    })();
  }, []);

  const upload = async (
    imageView: (
      options?: ImagePickerOptions | undefined,
    ) => Promise<ImagePickerResult>,
  ) => {
    const isPermissionGranted = await verifyMediaPermissions();
    if (!isPermissionGranted) {
      onError("Недостаточно прав");
      return;
    }
    const asset = await pickImage(imageView);
    if (!asset) {
      onError("Не выбрано изображение");
      return;
    }

    onUpload(asset.uri);
  };

  const verifyMediaPermissions = async () => {
    if (libraryPermissions?.status === PermissionStatus.UNDETERMINED) {
      const res = await requestLibraryPermission();
      return res.granted;
    }
    if (libraryPermissions?.status === PermissionStatus.DENIED) {
      Alert.alert("Недостаточно прав для доступа к медиатеке");
      return false;
    }
    return true;
  };

  const pickImage = async (
    imageView: (
      options?: ImagePickerOptions | undefined,
    ) => Promise<ImagePickerResult>,
  ) => {
    const result = await imageView({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      base64: true,
      allowsMultipleSelection: false,
      aspect: [8, 2],
      quality: 0.5,
    });
    if (!result.assets) {
      return null;
    }
    return result.assets[0];
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.btns}>
        <Button
          iconSvg={UploadIcon}
          text="Сфоткай"
          onPress={() => upload(launchCameraAsync)}
        />
        <Button
          iconSvg={UploadIcon}
          text="Загрузи"
          onPress={() => upload(launchImageLibraryAsync)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 8,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 17,
    alignItems: "center",
  },
  title: { color: Colors.blackLight, fontSize: 18 },
  btns: {
    flexDirection: "row",
    padding: 5,
    gap: 8,
  },
});
