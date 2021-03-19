import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Principal from "./components/common/Principal";
import Footer from "./components/common/Footer";
import Navegacion from "./components/common/Navegacion";
import Tabla from "./components/administrador/noticias/Tabla";
import NuevaNoticia from "./components/administrador/noticias/NuevaNoticia";
import EditarNoticia from "./components/administrador/noticias/EditarNoticia";

import Administracion from "./components/administracion/Administracion";
import Noticia from "./components/administracion/noticia/Noticia";
import Noticias from "./components/administracion/noticia/Noticias";
function App() {
  const [noticiasAPI, setNoticiasAPI] = useState([]);

  //para que este atento a los cambios
  const [recargarNoticias, setRecargarNoticias] = useState(true);

  useEffect(() => {
    if (recargarNoticias) {
      consultarAPI();
      setRecargarNoticias(false);
    }
  }, [recargarNoticias]);

  const consultarAPI = async () => {
    try {
      //Get  obtengo los datos
      const respuesta = await fetch("http://localhost:3000/noticia");
      const resultado = await respuesta.json();
      console.log(resultado);
      //guardar en el state
      setNoticiasAPI(resultado);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Router>
        <Navegacion></Navegacion>
        <Switch>
          <Route exact path="/">
            <Principal></Principal>
          </Route>
          <Route exact path="/admin">
            <Administracion></Administracion>
          </Route>
          <Route exact path="/admin/noticias">
            <Noticias></Noticias>
          </Route>
        </Switch>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
