import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useAuth } from "../context/AuthContex";
import { useHistory } from "react-router-dom";

import styled from "styled-components";

import { Form } from "./AdminPanel";

const useStyles = makeStyles({
  textField: {
    margin: 16,
    // lineHeight: 0,
  },
  box: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Wrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  margin: 0 auto;
  text-align: left;
`;

const H1 = styled.h1`
  font-size: 1.5rem;
  margin: 0 0 0 15px;
`;

const LogIn = () => {
  const classes = useStyles();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState(null);
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history.push("/adminPanel");
    } catch {
      setError("Błąd podczas logowania");
    }
    setLoading(false);
  }

  return (
    <>
      <Box className={classes.box}>
        <Wrapper>
          <H1>Zaloguj się</H1>
          {error && <p color="error">{error}</p>}
          <Form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              type="email"
              className={classes.textField}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Hasło"
              type="password"
              className={classes.textField}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button variant="contained" disabled={loading} type="submit">
              Zaloguj się
            </Button>
          </Form>
        </Wrapper>
      </Box>
    </>
  );
};

export default LogIn;
