import React from "react";
import CookieConsent from "react-cookie-consent";

const CookieInfo = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Rozumiem"
      cookieName="myAwesomeCookieName2"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "1rem" }}
      expires={150}
    >
      Ta strona korzysta z ciasteczek. Dalsze korzystanie ze strony oznacza, że
      zgadzasz się na ich użycie.
    </CookieConsent>
  );
};

export default CookieInfo;
