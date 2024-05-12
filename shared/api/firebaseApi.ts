import { FIREBASE_DB, FIREBASE_AUTH } from "@/firebaseConfig";
import { ICar } from "@/model/ICar";
import { IGas } from "@/model/IGas";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import {
  QuerySnapshot,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";

const db = FIREBASE_DB;
const auth = FIREBASE_AUTH;

export const signUp = async (
  email: string,
  password: string,
  lastName: string,
  firstName: string,
) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  const profileData = await updateProfile(user, {
    displayName: `${firstName} ${lastName}`,
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

export const addGasRefueling = async (
  uid: string,
  carNumber: string,
  gas: IGas,
) => {
  const docRef = doc(db, "users", uid, "gas", carNumber);
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
