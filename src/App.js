import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Principal from "./components/common/Principal";
import Footer from "./components/common/Footer";
import Navegacion from "./components/common/Navegacion";
function App() {
  return (
    <div>
      <Router>
        <Navegacion></Navegacion>
        <Principal></Principal>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
