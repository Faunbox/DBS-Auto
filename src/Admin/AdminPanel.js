import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

import { db } from "../Components/firebase";

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

const StyledTextField = styled(TextField)`
  overflow: hidden;
  width: auto;
  min-height: 50px;
  font-size: 2rem;
`;

// funkcje wysylania i wyswietlania aktualnych samochodow z mozliwoscia edycji

//ogarnac firebase storage do dodawania zdjec i dodanie lightboxa + slider???

export default function AdminPanel() {
  const [carName, setCarName] = useState();
  const [carEngine, setCarEngine] = useState();
  const [carYear, setCarYear] = useState();
  const [carLink, setCarLink] = useState();
  const [carDescription, setDescription] = useState();
  const [carImage, setCarImage] = useState();

  const { addCarData } = useData();
  const { logout } = useAuth();

  function clearAllTextFields() {
    setCarName("");
    setCarEngine("");
    setCarYear("");
    setCarLink("");
    setDescription("");
  }

  function handleLogout() {
    logout();
  }

  function handleSubmit(e) {
    e.preventDefault();
    db.collection("cars_list")
      .add(
        addCarData(
          carName,
          carEngine,
          carYear,
          carLink,
          carDescription,
          carImage
        )
      )
      .catch(console.log("błąd dodawania"));
    clearAllTextFields();
  }

  return (
    <>
      <Button onClick={handleLogout}>Wyloguj</Button>
      <Form onSubmit={handleSubmit}>
        <StyledTextField
          label="Marka i model samochodu"
          type="text"
          multiline
          variant="filled"
          onChange={(e) => setCarName(e.target.value)}
        />
        <StyledTextField
          id="standard-textarea"
          label="Silnik"
          type="text"
          multiline
          variant="filled"
          onChange={(e) => setCarEngine(e.target.value)}
        />
        <StyledTextField
          id="standard-textarea"
          label="Rocznik samochodu"
          type="text"
          multiline
          variant="filled"
          onChange={(e) => setCarYear(e.target.value)}
        />
        <StyledTextField
          id="standard-textarea"
          label="Link do oferty"
          type="text"
          multiline
          variant="filled"
          onChange={(e) => setCarLink(e.target.value)}
        />
        <StyledTextField
          id="standard-textarea"
          label="Krótki opis samochodu"
          type="text"
          multiline
          variant="filled"
          onChange={(e) => setDescription(e.target.value)}
        />
        <StyledTextField
          id="standard-textarea"
          label="Dodaj zdjęcie"
          multiline
          variant="filled"
          onChange={(e) => setCarImage(e.target.value)}
        />
        <Button type="submit">Dodaj samochód</Button>
      </Form>
      <Cars />
    </>
  );
}
