import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

const FormCat = () => {
  return (
    <div>
        <Container>
      <Form className="my-5 bg-light p-3">
        <Form.Group controlId="formBasicEmail">
          <Form.Label><h4>Nombre de la categoria:</h4></Form.Label>
          <Form.Control type="text" placeholder="Actualidad" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label><h4>Descripción:</h4></Form.Label>
          <Form.Control type="text" placeholder="Noticias sobre..." />
        </Form.Group>
        <Button variant="danger" type="submit">
          Agregar
        </Button>
      </Form>
      </Container>
    </div>
  );
};

export default FormCat;
