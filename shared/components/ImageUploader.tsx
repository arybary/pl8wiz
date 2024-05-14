import {
	MediaTypeOptions,
	launchImageLibraryAsync,
	useMediaLibraryPermissions,
	PermissionStatus,
} from 'expo-image-picker';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import UploadIcon from '../../assets/icons/upload';


import axios, { AxiosError } from 'axios';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { FIREBASE_DB, FIREBASE_STORAGE } from '@/firebaseConfig';
import { useEffect, useState } from 'react';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';

import { Colors, Fonts } from '../config/theme';

export interface UploadResponse {
	urls: {
		original: string;
		webP: string;
	};
}


interface ImageUploaderProps {
	onUpload: (uri: string) => void;
	onError: (error: string) => void;
}

export function ImageUploader({ onUpload, onError }: ImageUploaderProps) {
	const [libraryPermissions, requestLibraryPermission] = useMediaLibraryPermissions();
    const [progress, setProgress] = useState<number>(0);
    
  const [images, setImages] = useState<ImageData[]>([]);

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

	const upload = async () => {
		const isPermissionGranted = await varifyMediaPermissions();
		if (!isPermissionGranted) {
			onError('Недостаточно прав');
			return;
		}
		const asset = await pickImage();
		if (!asset) {
			onError('Не выбрано изображение');
			return;
		}
		const uploadedUrl = await uploadToServer(asset.uri, asset.fileName ?? '');
		
		
	};

	const varifyMediaPermissions = async () => {
		if (libraryPermissions?.status === PermissionStatus.UNDETERMINED) {
			const res = await requestLibraryPermission();
			return res.granted;
		}
		if (libraryPermissions?.status === PermissionStatus.DENIED) {
			Alert.alert('Недостаточно прав для доступа к фото');
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

	const uploadToServer = async (uri: string, name: string)  => {
		const response = await fetch(uri);
    const blob = await response.blob();

    const storageRef = ref(FIREBASE_STORAGE, "images/" + new Date().getTime());
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
        return null;
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log("Image available at", downloadURL);onUpload(downloadURL)
          await saveImageRecord(downloadURL, new Date().toISOString());
        });
      }
    );
	};
    async function saveImageRecord(url: string, createdAt: string) {
        try {
          const docRef = await addDoc(collection(FIREBASE_DB, "images"), {
            url,
            createdAt,
          });
          console.log("Image document saved correctly", docRef.id);
        } catch (e) {
          console.error("Error saving image record: ", e);
        }
      }
    
	return (
		<Pressable onPress={upload}>
			<View style={styles.container}>
				<UploadIcon />
				<Text style={styles.text}>Загрузить изображение</Text>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		gap: 8,
		backgroundColor: Colors.violetDark,
		borderRadius: 10,
		paddingHorizontal: 20,
		paddingVertical: 17,
		alignItems: 'center',
	},
	text: {
		fontSize:14,
		...Fonts.regular,
		color: Colors.white,
	},
});
