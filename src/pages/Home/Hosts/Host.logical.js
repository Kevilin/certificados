import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import app from "../../../firebase/firebaseConfig";
import { getFirestore } from "firebase/firestore";
import axios from "axios";
const db = getFirestore(app);

export const GetData = () => {

  const urlBase = "https://admin-api.kmr.dev.br/api";
  const [data, setData] = useState([]);

  //Busca os certificados no firebase
  /*
  const getDataFirebase = async () => {
    const data = await getDocs(collection(db, "certificados"));
    setData(data.docs);
    console.log(data);
  };*/

  //Busca os certificados via API
  const getDataByAPI = async () => {
    const response = await axios.get(
      `${urlBase}/certificados/busca`
    );

    setData(response.data)
  };

  return { getDataByAPI, data };
};
