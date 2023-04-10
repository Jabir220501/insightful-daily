import { db } from "../database/config";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

async function getUsers(querySnapshot) {
  return querySnapshot.docs.map((doc) => doc.data());
}

export async function getUserById(userId) {
  try {
    const q = query(collection(db, "users"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    return getUsers(querySnapshot);
  } catch (error) {
    console.log(error);
    throw new Error("User not found");
  }
}

export async function createUser(user) {
  try {
    await addDoc(collection(db, "articles"), user);
    return true;
  } catch (error) {
    throw new Error("Article could not be created");
  }
}
