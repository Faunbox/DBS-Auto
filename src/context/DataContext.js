import React, { createContext, useContext, useEffect, useState } from "react";

import { db, storage } from "../Components/firebase";
import firebase from "firebase/app";

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [carsData, setCarsData] = useState([]);

  function addCarData(name, engine, year, desc, price, link, image, imageName) {
    return {
      name: name,
      engine: engine,
      year: year,
      link: link,
      desc: desc,
      price: price,
      image: image,
      imageName: imageName,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    };
  }

  function deleteCarData(id, imageName) {
    db.collection("cars_list").doc(id).delete();
    // console.log(storage.ref().child(`${imageName}`).delete());
  }

  useEffect(() => {
    const unsubscribe = db
      .collection("cars_list")
      .orderBy("time", "desc")
      .onSnapshot((querySnapshot) => {
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
            };
          })
        );
      });
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    addCarData,
    deleteCarData,
    carsData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
