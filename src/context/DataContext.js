import React, { createContext, useContext, useEffect, useState } from "react";
import { db, storage } from "../Components/firebase";
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  orderBy,
  onSnapshot,
  query,
  serverTimestamp,
} from "firebase/firestore";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [carsData, setCarsData] = useState([]);
  const [isUpload, setIsUpload] = useState(false);
  const [uploadProcente, setUploadProcente] = useState();

  //firebase query
  const firebase_collection_name = "cars_list";

  const setQuery = (order = "") => {
    return query(collection(db, firebase_collection_name), order);
  };

  const addDocument = async (
    name,
    engine,
    year,
    desc,
    price,
    link,
    image,
    imageName
  ) => {
    await addDoc(collection(db, firebase_collection_name), {
      name: name,
      engine: engine,
      year: year,
      desc: desc,
      price: price,
      link: link,
      image: image,
      imageName: imageName,
      time: serverTimestamp(),
    })
      .then((res) => console.log("Dodano nowy samochód", res.id))
      .catch((err) =>
        console.log("Błąd podczas dodawania samochodu", err)
      );
  };
  async function addCarData(
    name,
    engine,
    year,
    desc,
    price,
    link,
    image,
    imageName
  ) {
    setUploadProcente("");
    setIsUpload(true);
    const imageRef = ref(storage, imageName);
    const uploadNewCar = uploadBytesResumable(imageRef, image);
    //state changed observer
    uploadNewCar.on(
      "state_changed",
      (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProcente(Math.floor(progress));
      },
      //On error handler
      (error) => console.error("Błąd w przesłaniu pliku", error.message),
      //On success handler
      () => {
        getDownloadURL(uploadNewCar.snapshot.ref).then((url) =>
          addDocument(name, engine, year, desc, price, link, url, imageName)
        );
      }
    );

    setTimeout(() => setIsUpload(false), 4000);
  }

  async function deleteCarData(id, imageName) {
    const imageRef = ref(storage, imageName);

    await deleteDoc(doc(db, firebase_collection_name, id))
      .then(() => console.log("Usunieto dokument -> ", id))
      .catch((err) =>
        console.log("Błąd podczas usuwania dokumentu", err.message)
      );
    await deleteObject(imageRef)
      .then(() => console.log("usunieto obrazek ze storage"))
      .catch((err) =>
        console.log("błąd podczas usuwania obrazka ze storage", err.message)
      );
  }

  const getData = async () => {
    await onSnapshot(setQuery(orderBy("time", "desc")), (querySnapshot) => {
      setCarsData(
        ...carsData,
        querySnapshot.docs.map((data) => {
          return {
            id: data.id,
            name: data.data().name,
            engine: data.data().engine,
            year: data.data().year,
            desc: data.data().desc,
            link: data.data().link,
            image: data.data().image,
            price: data.data().price,
            imageName: data.data().imageName,
            time: data.data().time,
          };
        })
      );
    });
  };

  useEffect(() => {
    const unsubscribe = getData();
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    addCarData,
    deleteCarData,
    carsData,
    uploadProcente,
    isUpload,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
