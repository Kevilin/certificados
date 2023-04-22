import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { nanoid } from "nanoid";
import app from "../../../firebase/firebaseConfig";
import { getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
const db = getFirestore(app);

export const HandleClick = () => {
  const [user, setUser] = useState(nanoid());
  const [toSubmit, setToSubmit] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [inputs, setInputs] = useState({});

  const firebaseAdd = async () => {
    try {
      await addDoc(collection(db, "certificados"), {
        inputs,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleSubmit = (e) => {
    const validate = inputs.curso === "" || inputs.url_certificado === "" || inputs.url_imagem === "";
    e.preventDefault();
    if (validate) {
      return alert("Revise todos os campos");
    }
    setToSubmit(true);
    setTimeout(() => {
      setToSubmit(false);
      setRedirect(true);
    }, 3000);
    firebaseAdd();
  };

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
      user,
    });
  };

  return { handleSubmit, handleChange, firebaseAdd, toSubmit, redirect };
};
