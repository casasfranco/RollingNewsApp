import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Bienvenida = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container className="text-center ">
          <h1>¡Bienvenido Administrador!</h1>
          <h5>Selecciona la tarea en la que vas a trabajar</h5>
        </Container>
      </Jumbotron>
      <section className="container text-center">
        <section className="row">
          <div className="col-sm-12 col-md-6">
            <Button className="mb-4" variant="danger" size="lg" block>
              Noticias
            </Button>
            <Link to="/admin/categorias">
            <Button className="mb-4" variant="danger" size="lg" block>
              Categorias
            </Button>
            </Link>
          </div>
          <div className="col-sm-12 col-md-6">
            <Button className="mb-4" variant="danger" size="lg" block>
              Nueva Noticia
            </Button>
            <Link to="/admin/categorias/nueva">
            <Button className="mb-4" variant="danger" size="lg" block>
              Nueva Categorias
            </Button>
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Bienvenida;
