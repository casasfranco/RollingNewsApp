import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import LineaCat from "./LineaCat";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt, faEye } from "@fortawesome/free-solid-svg-icons";


const TablaCat = (props) => {
  return (
    <div>
      <Container className="my-5">
        <h1 className="text-center my-4"> Lista de categorias</h1>
          {/*<ListGroup>
          {props.categoriasAPI.map((categoria) => (
            <LineaCat
              key={categoria._id}
              categoria={categoria}
              setRecargarCategorias={props.setRecargarCategorias}
            ></LineaCat>
          ))}
          </ListGroup>*/}
        
      
      </Container>

    </div>
  );
};

export default TablaCat;
