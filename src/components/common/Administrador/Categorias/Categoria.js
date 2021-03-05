import React, { useEffect, useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import TablaCat from "./TablaCat";
import FormCat from "./FormCat";
import { Link } from "react-router-dom";

const Categoria = () => {
  const [categoriasAPI, setRecargarCategoriasAPI] = useState([]);
  const [recargarCategorias, setRecargarCategorias] = useState(true);

  useEffect(() => {
    if (recargarCategorias) {
      consultarAPI();
      setRecargarCategorias(false);
    }
  }, [recargarCategorias]);

  const consultarAPI = async () => {
    try {
      const cabecera = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
      };
      const respuesta = await fetch(
        `https://rolling-news-servidor.herokuapp.com/api/categoria/`,
        cabecera
      );
      const resultado = await respuesta.json();
      setRecargarCategoriasAPI(resultado);
    } catch (error) {
      console.log(error);
    }
  };
 
  console.log(categoriasAPI);

  return (
    <div>
      <Jumbotron fluid>
        <Container className="text-center">
          <h1> Administración de Categorias</h1>
          <p></p>
        </Container>
      </Jumbotron>

      <div className="container">
        <Link to="/admin/categorias/nueva">
          <Button className="my-5" variant="danger" size="lg" block>
            Ingresar nueva categoria
          </Button>
        </Link>
      </div>

      <TablaCat 
      categoriasAPI={categoriasAPI}
      setRecargarCategorias={setRecargarCategorias}>
      
      </TablaCat>
    </div>
  );
};

export default Categoria;
