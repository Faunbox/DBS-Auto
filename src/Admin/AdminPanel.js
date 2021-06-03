import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core";

import { db, storage } from "../Components/firebase";

import { useData } from "../context/DataContext";
import { useAuth } from "../context/AuthContex";

import Cars from "./Cars";

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px auto;
`;

const useStyles = makeStyles({
  textField: {
    width: "auto",
    margin: 10,
  },
  logOut: {
    margin: "10px",
  },
});

export default function AdminPanel() {
  const [carName, setCarName] = useState();
  const [carEngine, setCarEngine] = useState();
  const [carYear, setCarYear] = useState();
  const [carLink, setCarLink] = useState();
  const [carDescription, setDescription] = useState();
  const [carPrice, setCarPrice] = useState();
  const [carImage, setCarImage] = useState();

  const { addCarData } = useData();
  const { logout } = useAuth();
  const classes = useStyles();

  function clearAllTextFields() {
    setCarName("");
    setCarEngine("");
    setCarYear("");
    setCarLink("");
    setDescription("");
    setCarPrice("");
    setCarImage("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const imageRef = storage.ref().child(carImage.name);
    await imageRef.put(carImage);
    let imageUrl = await imageRef.getDownloadURL();
    db.collection("cars_list")
      .add(
        addCarData(
          carName,
          carEngine,
          carYear,
          carDescription,
          carPrice,
          carLink,
          imageUrl,
          carImage.name
        )
      )
      .catch((err) => console.log(err.code));
    clearAllTextFields();
  }

  return (
    <>
      <Button
        className={classes.logOut}
        variant="contained"
        onClick={() => logout()}
      >
        Wyloguj
      </Button>
      <Form onSubmit={handleSubmit}>
        <TextField
          label="Marka i model samochodu"
          type="text"
          className={classes.textField}
          multiline
          size="medium"
          variant="outlined"
          value={carName}
          onChange={(e) => setCarName(e.target.value)}
        />
        <TextField
          id="standard-textarea"
          label="Silnik"
          type="text"
          className={classes.textField}
          multiline
          variant="outlined"
          value={carEngine}
          onChange={(e) => setCarEngine(e.target.value)}
        />
        <TextField
          id="standard-textarea"
          label="Rocznik samochodu"
          type="text"
          className={classes.textField}
          multiline
          variant="outlined"
          value={carYear}
          onChange={(e) => setCarYear(e.target.value)}
        />
        <TextField
          id="standard-textarea"
          label="Link do oferty"
          type="text"
          className={classes.textField}
          multiline
          variant="outlined"
          value={carLink}
          onChange={(e) => setCarLink(e.target.value)}
        />
        <TextField
          id="standard-textarea"
          label="Krótki opis samochodu"
          type="text"
          className={classes.textField}
          multiline
          variant="outlined"
          value={carDescription}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          id="standard-textarea"
          label="Cena Samochodu"
          type="number"
          className={classes.textField}
          multiline
          variant="outlined"
          value={carPrice}
          onChange={(e) => setCarPrice(e.target.value)}
        />
        <Input
          id="image-import"
          inputProps={{
            accept: ".img, .png",
          }}
          onChange={(e) => setCarImage(e.target.files[0])}
          type="file"
        />
        <Button type="submit" variant="contained">
          Dodaj samochód
        </Button>
      </Form>
      <Cars />
    </>
  );
}
