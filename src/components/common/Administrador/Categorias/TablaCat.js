import React from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrashAlt,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

const TablaCat = () => {
  return (
    <div>
      <Container className="my-5">
        <Button className="my-5" variant="danger" size="lg" block>
          Ingresar nueva categoria
        </Button>
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>Categorias disponibles</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Actualidad</td>
              <td>Noticias de último momento</td>

              <td>
                <Button className="mx-3" variant="success">
                  <FontAwesomeIcon
                    icon={faEdit}
                    size=""
                    fixedWidth
                  ></FontAwesomeIcon>{" "}
                </Button>
                <Button className="mx-3" variant="warning">
                <FontAwesomeIcon
                    icon={faTrashAlt}
                    size=""
                    fixedWidth
                  ></FontAwesomeIcon>{" "}
                </Button>
                <Button className="mx-3" variant="dark">
                <FontAwesomeIcon
                    icon={faEye}
                    size=""
                    fixedWidth
                  ></FontAwesomeIcon>{" "}
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default TablaCat;
