import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Principal from "./components/common/Principal";
import Footer from "./components/common/Footer";
import Navegacion from "./components/common/Navegacion";
import Categoria from "./components/common/Administrador/Categorias/Categoria";
function App() {
  return (
    <div>
      <Router>
        <Navegacion></Navegacion>
        <Categoria></Categoria>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
