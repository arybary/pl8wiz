import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Platform,
} from "react-native";
import functions from '@react-native-firebase/functions';
import { ImageUploader } from "./ImageUploader";
import TextRecognition, {
  TextRecognitionResult,
} from '@react-native-ml-kit/text-recognition';

export function TextRecognitionComponent(){
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);

  const [text, setText] = useState<string>("hello");


  const recognizeTextFromImage = async (imageURL:string) => {
    const result = await TextRecognition.recognize(imageURL);
    console.log('rsult',result)
    setText(result.text)
  };
  return (
    <View style={styles.container}>
      <ImageUploader
        nameBtn="Загрузить фото"
        onUpload={recognizeTextFromImage}
        onError={(e) => console.log(e)}
      />
      <Text style={styles.recognizedText}>{text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  recognizedText: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    width: "80%",
  },
  scroll: {
    flex: 1,
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 2,
  },
});


