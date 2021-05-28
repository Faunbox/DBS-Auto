import React, { lazy, Suspense } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
// eslint-disable-next-line
import firebase from "./Components/firebase";

import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Nav from "./Components/Navbar";
import Progress from "./Components/Progress";
import CookieInfo from "./Components/CookieInfo";

const OffertComponent = lazy(() => import("./Components/Offert"));
const CarsComponent = lazy(() => import("./Components/Cars"));
const ContactComponent = lazy(() => import("./Components/Contact"));

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Nav />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/oferta" component={OffertComponent} />
              <Route path="/samochody" component={CarsComponent} />
              <Route path="/kontakt" component={ContactComponent} />
            </Switch>
          </Suspense>
          <Footer />
          <CookieInfo />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
