import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import TablaCat from "./TablaCat";
import FormCat from "./FormCat";

const Categoria = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container className="text-center">
          <h1>Categorias</h1>
          <p></p>
        </Container>
      </Jumbotron>
      <TablaCat></TablaCat>
      <FormCat></FormCat>
    </div>
  );
};

export default Categoria;
