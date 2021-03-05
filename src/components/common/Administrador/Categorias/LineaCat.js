import { Button } from "react-bootstrap";
import React from "react";
import { ListGroup } from "react-bootstrap";
import Swal from "sweetalert2";

const LineaCat = (props) => {
  const eliminarCategoria = (id) => {
    Swal.fire({
      title: "¿Esta seguro de eliminar la categoria?",
      text: "No puedes recuperar una categoria eliminada",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then(async (result) => {
      if (result.value) {
        //eliminar categoria
        try {
          const resultado = await fetch(
            `https://rolling-news-servidor.herokuapp.com/api/categoria/${id}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                token: localStorage.getItem("token"),
              },
            }
          );
          if (resultado.status === 200) {
            Swal.fire(
              "Categoria eliminada",
              "Su categoria fue eliminada con exito",
              "success;"
            );
          }
          //recargar la lista de categorias
          props.setRecargarCategorias(true);
        } catch (error) {
          console.log(error);
        }
      }
    });
  };
  return (
    <div>
        <ListGroup>
            <div>
                <div>
                    <p>{props.categoria.nombreCat}</p>
                    <p>{props.categoria.descripcionCat}</p>
                </div>
            </div>

            <div>
                <Button 
                variant="danger"
                onClick={() => eliminarCategoria(props.categoria._id)}>
                
                    
                </Button>
            </div>
        </ListGroup>
    </div>
  ); 
};

export default LineaCat;
