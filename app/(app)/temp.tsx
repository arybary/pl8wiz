import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { FIREBASE_DB, FIREBASE_STORAGE } from "@/firebaseConfig";
import { Uploading } from "@/shared/components/Uploading";


interface ImageData {
  url: string;
  createdAt: string;
}

export default function Home() {
  const [image, setImage] = useState("");
 


  const [images, setImages] = useState<ImageData[]>([]);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(FIREBASE_DB, "images"), (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          console.log("New image", change.doc.data());
          const imageData: ImageData = change.doc.data() as ImageData;
          setImages((prevImages) => [...prevImages, imageData]);
        }
      });
    });
    return () => unsubscribe();
  }, []);

	const pickImage = async () => {
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 0.5,
		});
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      await uploadImage(result.assets[0].uri, "video");
    }
		if (!result.assets) {
			return null;
		}
		return result.assets[0];
	};

  async function  uploadImage(uri:string, fileType:string) {
    const response = await fetch(uri);
    const blob = await response.blob();

    const storageRef = ref(FIREBASE_STORAGE, "images/");
    const uploadTask = uploadBytesResumable(storageRef, blob);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(Number(progress.toFixed()));
      },
      (error) => {
        console.error("Error uploading image: ", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log("Image available at", downloadURL);
          await saveImageRecord(downloadURL);
        
          setImage("");
       
        });
      }
    );
  }

  async function saveImageRecord(url: string) {
    try {
      const docRef = await addDoc(collection(FIREBASE_DB, "images"), {
        url,
      
      });
      console.log("Image document saved correctly", docRef.id);
    } catch (e) {
      console.error("Error saving image record: ", e);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={images}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => 
              <Image
                source={{ uri: item.url }}
                style={{ width: "34%", height: 100 }}
              />
          
        }
        numColumns={3}
        contentContainerStyle={{ gap: 2 }}
        columnWrapperStyle={{ gap: 2 }}
      />
   
     
        
      <TouchableOpacity
        onPress={pickImage}
        style={{
          position: "absolute",
          bottom: 90,
          right: 30,
          width: 44,
          height: 44,
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 25,
        }}
      >
        <Ionicons name="image" size={24} color="white" />
      </TouchableOpacity>
 
    </View>
  );
}