import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ImageUploader } from "../../shared/components/ImageUploader";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { FIREBASE_STORAGE } from "@/firebaseConfig";
import { Colors } from "../../shared/config/theme";
import { TEXT_RECOGNITION_API } from "../../shared/config/links";

const KEY = process.env.EXPO_PUBLIC_IMAGE_TO_TEXT_API_KEY;

export function ReadNumberCar() {
  const [extractedText, setExtractedText] = useState<string>("");
  const performOCR = async (file: string) => {
    const response = await fetch(file);
    const blob = await response.blob();

    const storageRef = ref(FIREBASE_STORAGE, "numberCar");
    const uploadTask = uploadBytesResumable(storageRef, blob);

    const urlImage = await getDownloadURL(uploadTask.snapshot.ref);
    console.log("url", urlImage);
    var myHeaders = new Headers();
    myHeaders.append("apikey", KEY as string);

    var requestOptions = {
      method: "GET",
      redirect: "follow" as RequestRedirect,
      headers: myHeaders,
    };

    fetch(TEXT_RECOGNITION_API + `url?url=${urlImage}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setExtractedText(result["all_text"]);
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <View style={styles.container}>
      <ImageUploader
        name="Знайди по номеру авто"
        onUpload={performOCR}
        onError={(e) => console.log(e)}
      />
      <Text style={styles.recognizedText}>{extractedText}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  recognizedText: {
    marginTop: 20,
    padding: 10,
    borderWidth: 2,
    borderColor: "#ddd",
    fontSize: 28,
    backgroundColor: Colors.black,
    color: Colors.white,
    fontWeight: "600",
    width: "80%",
  },
  scroll: {
    flex: 1,
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 2,
  },
});
