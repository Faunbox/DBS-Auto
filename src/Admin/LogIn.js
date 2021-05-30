import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useAuth } from "../context/AuthContex";
import { useHistory } from "react-router-dom";

const LogIn = () => {
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
      <Box
        style={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ maxWidth: "400px", width: "100%" }}>
          <h2>Zaloguj się</h2>
          {error && <p color="error">{error}</p>}
          <form
            onSubmit={handleSubmit}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              label="Email"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Hasło"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button disabled={loading} type="submit">
              Zaloguj się
            </Button>
          </form>
        </div>
      </Box>
    </>
  );
};

export default LogIn;
