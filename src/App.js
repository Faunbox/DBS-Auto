import React, { lazy, Suspense } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import { AuthProvider } from "./context/AuthContex";
// eslint-disable-next-line
import firebase from "./Components/firebase";

import Footer from "./Components/Footer";
import Nav from "./Components/Navbar";
import Progress from "./Components/Progress";
import CookieInfo from "./Components/CookieInfo";
import PrivateRoute from "./Admin/PrivateRoute";

const OffertComponent = lazy(() => import("./Components/Offert"));
const CarsComponent = lazy(() => import("./Components/Cars"));
const ContactComponent = lazy(() => import("./Components/Contact"));
const AdminPanel = lazy(() => import("./Admin/AdminPanel"));
const AdminLogIn = lazy(() => import("./Admin/LogIn"));
const MainComponent = lazy(() => import("./Components/Main"));

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Nav />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/" exact component={MainComponent} />
              <Route path="/oferta" component={OffertComponent} />
              <Route path="/samochody" component={CarsComponent} />
              <Route path="/kontakt" component={ContactComponent} />
              <AuthProvider>
                <PrivateRoute exact path="/adminPanel" component={AdminPanel} />
                <Route path="/admin" component={AdminLogIn} />
              </AuthProvider>
              <Route path="*" render={() => <Redirect push to="/" />} />
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
