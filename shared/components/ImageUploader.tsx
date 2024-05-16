import {
  MediaTypeOptions,
  launchImageLibraryAsync,
  useMediaLibraryPermissions,
  PermissionStatus,
  ImagePickerOptions,
  ImagePickerResult,
  launchCameraAsync,
} from "expo-image-picker";
import { Alert, StyleSheet, View } from "react-native";
import UploadIcon from "../../assets/icons/upload";

import { Colors } from "../config/theme";
import { Button } from "./Button";

export interface UploadResponse {
  urls: {
    original: string;
    webP: string;
  };
}

interface ImageUploaderProps {
  nameBtn: string;
  onUpload: (uri: string) => void;
  onError: (error: string) => void;
}

export function ImageUploader({
  onUpload,
  onError,
  nameBtn,
}: ImageUploaderProps) {
  const [libraryPermissions, requestLibraryPermission] =
    useMediaLibraryPermissions();

  const upload = async (
    imageView: (
      options?: ImagePickerOptions | undefined,
    ) => Promise<ImagePickerResult>,
  ) => {
    const isPermissionGranted = await varifyMediaPermissions();
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

  const varifyMediaPermissions = async () => {
    if (libraryPermissions?.status === PermissionStatus.UNDETERMINED) {
      const res = await requestLibraryPermission();
      return res.granted;
    }
    if (libraryPermissions?.status === PermissionStatus.DENIED) {
      Alert.alert("Недостаточно прав для доступа к фото");
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
      aspect: [1, 1],
      quality: 0.5,
    });
    if (!result.assets) {
      return null;
    }
    return result.assets[0];
  };

  return (
    <View style={styles.container}>
      <Button text="Сфоткай" onPress={() => upload(launchCameraAsync)} />
      <Button
        iconSvg={UploadIcon}
        text="Загрузи"
        onPress={() => upload(launchImageLibraryAsync)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    backgroundColor: Colors.violetDark,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 17,
    alignItems: "center",
  },
});
