import {
  MediaTypeOptions,
  launchImageLibraryAsync,
  useMediaLibraryPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import UploadIcon from "../../assets/icons/upload";
import axios, { AxiosError } from "axios";
import { Colors, Fonts } from "../config/theme";
import { getDownloadURL } from "firebase/storage";

export interface UploadResponse {
  urls: {
    original: string;
    webP: string;
  };
}

interface ImageUploaderProps {
	nameBtn:string;
  onUpload: (uri: string) => void;
  onError: (error: string) => void;
}

export function ImageUploader({ onUpload, onError,nameBtn }: ImageUploaderProps) {
  const [libraryPermissions, requestLibraryPermission] =
    useMediaLibraryPermissions();

  const upload = async () => {
    const isPermissionGranted = await varifyMediaPermissions();
    if (!isPermissionGranted) {
      onError("Недостаточно прав");
      return;
    }
    const asset = await pickImage();
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

  const pickImage = async () => {
    const result = await launchImageLibraryAsync({
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
    <Pressable onPress={upload}>
      <View style={styles.container}>
        <UploadIcon />
        <Text style={styles.text}>{nameBtn}</Text>
      </View>
    </Pressable>
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
  text: {
    fontSize: 14,
    ...Fonts.regular,
    color: Colors.white,
  },
});
