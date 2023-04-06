import React from "react";
import { db } from "../../database/config";
import { collection, getDocs } from "firebase/firestore";

function index() {
  const getUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((users) => {
        console.log(users.data());
      });
    } catch (error) {
      console.log(error);
    }
  };
  getUsers()
  
  return <div>index</div>;
}

export default index;
