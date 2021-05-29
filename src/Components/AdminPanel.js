import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
`;

const StyledTextField = styled(TextField)`
  overflow: hidden;
  width: auto;
  height: auto;
`;

// Dodać kolejne pola do formularza, zrobic nowy kontekst do autoryzacji uzytkownika, funkcje wysylania i wyswietlania aktualnych samochodow z mozliwoscia usuwania i edycji

//ogarnac firebase storage do dodawania zdjec i dodanie lightboxa + slider???

export default function AdminPanel() {
  const [carName, setCarName] = useState();
  const [carEngine, setCarEngine] = useState();
  const [carYear, setCarYear] = useState();
  const [carLink, setCarLink] = useState();
  const [carDescription, setDescription] = useState();

  return (
    <Form>
      <StyledTextField
        id="standard-textarea"
        label="Krótki opis samochodu"
        placeholder="Opis samochodu"
        multiline
        variant="filled"
        onChange={(e) => setDescription(e.target.value)}
      />
    </Form>
  );
}
