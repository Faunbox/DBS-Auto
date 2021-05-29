import React, { createContext, useContext, useEffect, useState } from "react";
import { db } from "../Components/firebase";

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [carsData, setCarsData] = useState([]);

  useEffect(() => {
    db.collection("cars_list")
      //   .orderBy("time", "desc")
      .get()
      .then((doc) => {
        setCarsData(
          doc.docs.map((data) => {
            return {
              id: data.id,
              name: data.data().name,
              //   time: data.data().time,
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
    carsData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
