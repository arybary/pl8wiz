import { FIREBASE_DB, FIREBASE_AUTH } from "@/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { CarInfo } from "@/store/model/CarInfo";
import { GasInfo } from "@/store/model/GasInfo";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";

const db = FIREBASE_DB;
const auth = FIREBASE_AUTH;

export const userAuthStateListener = async () => {
  await onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("listener", user);
      const { uid, displayName, email, photoURL } = user;
    }
  });
};

export const signUp = async (
  email: string,
  password: string,
  lastName: string,
  firstName: string,
) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  const profileData = updateProfile(user, {
    displayName: `${firstName} ${lastName}`,
  });
  console.log("profile", profileData);
};

export const signIn = async (email: string, password: string) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  console.log("singin", user);
};

export const addCar = async (uid: string, car: CarInfo) => {
  const docRef = doc(db, "users", uid, "cars",car.carNumber);
  const carData = await setDoc(docRef, car);
  console.log("car", carData);
  return car
};

export const getCars = async (uid: string) => {
   const carsCollectionRef = collection(db, "users", uid, "cars");
  const querySnapshot = await getDocs(carsCollectionRef);
  const cars:CarInfo[] = [];
  querySnapshot.forEach((doc) => {
      cars.push(doc.data() as CarInfo);
  });
  return cars;
};
