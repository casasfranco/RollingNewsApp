import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const AdministrarNoticia = (props) => {
  const eliminarNoticia = (id) => {
    console.log(id);

    Swal.fire({
      title: "¿Esta seguro de eliminar la Noticia?",
      text: "No puedes recuperar una noticia eliminada",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then(async (result) => {
      if (result.value) {
        //Elimino la noticia
        try {
          const resultado = await fetch(
            ` http://localhost:3000/noticia/${id}`,
            {
              method: "DELETE",
              headers: {
                "Content-type": "application/json",
              },
            }
          );
          console.log(resultado);
          if (resultado.status === 200) {
            Swal.fire(
              "Noticia eliminada!",
              "Su noticia fue eliminada correctamente.",
              "success"
            );
          }
          //Recargar la lista de categorias
          props.setRecargarNoticias(true);
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <div className="container">
      <ListGroup.Item className="d-flex justify-content-between">
        <div className="row">
          <div className="ml-3">
            <h5>Titulo: {props.noticia.tituloPrincipalNoticia} </h5>
            <p>
              <span className="ml-3 text-muted">
                <b>Autor de la nota: </b>
                {props.noticia.autorNoticia}
              </span>

              <span className="ml-3 text-muted">
                <b>Categoria:</b> {props.noticia.categoriaNoticia}
              </span>
            </p>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <Link
            className="btn btn-warning mx-2"
            to={`/admin/noticia/edicion/${props.noticia.id}`}
          >
            <FontAwesomeIcon icon={faEdit} />
          </Link>

          <Button
            variant="danger"
            onClick={() => eliminarNoticia(props.noticia.id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </div>
      </ListGroup.Item>
    </div>
  );
};

export default withRouter(AdministrarNoticia);
