import React from "react";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

import Nav from "./Components/Navbar";
import Slider from "./Components/Slider";

function App() {
  return (
    <div className="App">
      <Nav />
      <Slider />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
