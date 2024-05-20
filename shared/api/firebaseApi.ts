import { FIREBASE_DB, FIREBASE_AUTH, FIREBASE_STORAGE } from "@/firebaseConfig";
import { ICar } from "@/model/ICar";
import { IGas } from "@/model/IGas";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import {
  DocumentData,
  DocumentReference,
  QuerySnapshot,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const db = FIREBASE_DB;
const auth = FIREBASE_AUTH;
const storage = FIREBASE_STORAGE;

export const signUp = async (
  email: string,
  password: string,
  lastName: string,
  firstName: string,
  photoURL?: string,
) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  const profileData = await updateProfile(user, {
    displayName: `${firstName} ${lastName}`,
    photoURL,
  });
  console.log("profile", profileData);
  return profileData;
};

export const signIn = async (email: string, password: string) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  console.log("singin", user);
  return user;
};

export const addCar = async (uid: string, car: ICar) => {
  const docRef = doc(db, "users", uid, "cars", car.carNumber);
  const carData = await setDoc(docRef, car);
  console.log("car", carData);
  return car;
};

export const getCars = async (uid: string) => {
  const carsCollectionRef = collection(db, "users", uid, "cars");
  const querySnapshot = await getDocs(carsCollectionRef);
  const cars: ICar[] = [];
  querySnapshot.forEach((doc) => {
    cars.push(doc.data() as ICar);
  });
  return cars;
};

export const addGasRefueling = async (uid: string, gas: IGas, id: string) => {
  const docRef = doc(db, "users", uid, "gas", id);
  const gasData = await setDoc(docRef, gas);
  console.log("gas", gasData);
  return gas;
};

export const getGasRefueling = async (uid: string, carNumber: string) => {
  const gasCollectionRef = collection(db, "users", uid, "gas");
  const querySnapshot: QuerySnapshot = await getDocs(
    query(gasCollectionRef, where("car", "==", carNumber)),
  );
  const gases: IGas[] = [];
  querySnapshot.forEach((doc) => {
    gases.push(doc.data() as IGas);
  });
  return gases;
};

export const uploadImage = async (
  uri: string,
  uid: string,
  name: "avatar" | "chek",
  id?: string,
) => {
  const response = await fetch(uri);
  const blob = await response.blob();
  let docRef: DocumentReference<DocumentData, DocumentData>;
  if (id) {
    docRef = doc(db, "users", uid, "gas", id, name);
  } else {
    docRef = doc(db, "users", uid, name);
  }

  const storageRef = ref(storage, `${name}_${id}/`);
  const uploadTask = uploadBytesResumable(storageRef, blob);
  uploadTask.on(
    "state_changed",

    (error) => {
      console.error("Error uploading image: ", error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
        console.log("Image available at", downloadURL);
        await setDoc(docRef, { downloadURL });
      });
    },
  );
  return getDownloadURL(uploadTask.snapshot.ref);
};
