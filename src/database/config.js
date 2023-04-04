import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD1fyCULa-eIQC-tX5Ew5luLFHbHbw3psc",
  authDomain: "insightful-daily-50bd0.firebaseapp.com",
  projectId: "insightful-daily-50bd0",
  storageBucket: "insightful-daily-50bd0.appspot.com",
  messagingSenderId: "621465161547",
  appId: "1:621465161547:web:ffd8d4f0611993a17e22ce",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
