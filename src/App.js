import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Principal from "./components/common/Principal";
import Footer from "./components/common/Footer";
import Navegacion from "./components/common/Navegacion";
import Administracion from "./components/administracion/Administracion";
function App() {
  return (
    <div>
      <Router>
        <Navegacion></Navegacion>
        <Route exact path="/">
          <Principal></Principal>
        </Route>
        <Route exact path="/admin">
          <Administracion></Administracion>
        </Route>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
