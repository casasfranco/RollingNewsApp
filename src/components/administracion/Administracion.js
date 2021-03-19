import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import React from "react";
import { Link } from "react-router-dom";

const Administracion = () => {
  return (
    <>
      <Jumbotron className="d-flex justify-content-center text-center">
        <div className="col-sm-12 col-md-4">
          <h1>Hello, world!</h1>
        </div>
        <div className="col-sm-12 col-md-4">
          <p>
            Poner algo que haga referencia a la adminsitracion, puede ser un
            saludo o lo que quieran. Dejo esto a modo de idea.
          </p>
        </div>
        <div className="col-sm-12 col-md-4">
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </div>
      </Jumbotron>
      <div className="container">
        <h1>Adminsitracion funcionando </h1>
        <section className="row justify-content-around">
          {" "}
          <Link to="/admin/peliculas">
            <Button variant="secondary" className="btn-admin my-4">
              Administrar peliculas
            </Button>{" "}
          </Link>
          <Link to="/admin/usuarios">
            <Button variant="success" className="btn-admin my-4">
              Administrar usuarios
            </Button>{" "}
          </Link>
          <Link to="/admin/etc">
            <Button variant="warning" className="btn-admin my-4">
              etc
            </Button>{" "}
          </Link>
        </section>
      </div>
    </>
  );
};

export default Administracion;
