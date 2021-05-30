import React, { createContext, useContext, useEffect, useState } from "react";

import { db } from "../Components/firebase";
import firebase from "firebase/app";

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [carsData, setCarsData] = useState([]);

  function addCarData(name, engine, year, desc, link, image) {
    return {
      name: name,
      engine: engine,
      year: year,
      link: link,
      desc: desc,
      image: image,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    };
  }

  function deleteCarData(id) {
    db.collection("cars_list").doc(id).delete();
  }

  useEffect(() => {
    db.collection("cars_list")
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
            };
          })
        );
      });
  }, []);

  const value = {
    addCarData,
    deleteCarData,
    carsData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
