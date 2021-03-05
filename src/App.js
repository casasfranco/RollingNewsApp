import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Principal from "./components/common/Principal";
import Footer from "./components/common/Footer";
import Navegacion from "./components/common/Navegacion";
import Categoria from "./components/common/Administrador/Categorias/Categoria";
import FormCat from "./components/common/Administrador/Categorias/FormCat";
import Bienvenida from "./components/common/Administrador/Admin/Bienvenida";
function App() {
  return (
    <div>
      <Router>
        <Navegacion></Navegacion>

        <Route
          exact
          path="/admin/categorias"
          render={() => (
            <div>
              <Categoria></Categoria>
            </div>
          )}
        ></Route>

        <Route
          exact
          path="/admin/categorias/nueva"
          render={() => (
            <div>
              <FormCat></FormCat>
            </div>
          )}
        ></Route>
        <Route
          exact
          path="/admin"
          render={() => (
            <div>
              <Bienvenida></Bienvenida>
            </div>
          )}
        ></Route>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
