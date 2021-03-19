import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

const LineaUser = (props) => {
  const [nivelesAPI, setNivelesAPI] = useState([]);
  const [cargarNiveles, setCargarNiveles] = useState(true);

  useEffect(() => {
    if (cargarNiveles) {
      consultarNivelesAPI();
      setCargarNiveles(false);
    }
  });

  const consultarNivelesAPI = async () => {
    try {
      const cabecera = {
        method: "GET",
        header: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
      };
      const respuesta = await fetch(
        "https://rolling-news-servidor.herokuapp.com/api/usuario/nivel",
        cabecera
      );
      const resultado = await respuesta.json();
      setNivelesAPI(resultado);
      console.log(resultado);
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarUsuario = (id) => {
      Swal.fire({
          title: "¿Esta seguro de eliminar el usuario?",
          text: "No podras recuperar un usuario eliminado",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, ¡Eliminar!",
      }).then(async (result) => {
        if (result.value) {

            try{
                const resultado = await fetch(
                `https://rolling-news-servidor.herokuapp.com/api/usuario/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        token: localStorage.getItem("token"),
                    },
                }    
                );
                if (resultado.status === 200){
                    Swal.fire(
                        "¡Usuario eliminado!",
                        "Su usuario fue eliminado correctamente",
                        "success"
                    );
                }
                props.setRecargarUsuarios(true);
            }  catch (error) {
                console.log(error);
            }
        }
    });
  };

  const actualizarNivelUsuario = (id,valor) => {
      const usuario = {
          ... props.usuario,
      }
      usuario.perfilUsuario = valor;

      Swal.fire({
        title: "¿Esta seguro de cambiar el nivel de usuario?",
        text: "Obtendrá acceso a información confidencial si elijes mal.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, actualizar!",
      }).then(async (result) => {
          if (result.value) {
              //actualizar
              try {
                  const cabecera = {
                      method: "PUT",
                      headers: {
                          "Content-Type" : "application/json",
                          token: localStorage.getItem("token"),
                      },
                      body: JSON.stringify(usuario),
                  };
                  const resultado = await fetch(
                    `https://rolling-news-servidor.herokuapp.com/api/usuario/${id}`,
                    cabecera
                  );

                  if (resultado.status === 200) {
                      Swal.fire(
                          "¡Usuario modificado!",
                          "Su usuario fue modificado con exito",
                          "success"
                      );
                  }
                  //recargar lista de usuarios
                  props.setRecargarUsuarios(true);  
            } catch (error) {
                console.log(error);
            }  
        }
    });
  };



  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between">
        <div className="row">
          <div className="ml-3">
            <p>{props.usuario.nombreUsuario}</p>
            <p>{props.usuario.nombre}</p>
            <p>{props.usuario.apellido}</p>
          </div>
        </div>
        <form>
          <div>
            <label htmlFor="nivelesFormControlSelect">Nivel de usuario</label>
            <select
              className="form-control"
              id="nivelesFormControlSelect"
              onChange={(e) => {
                actualizarNivelUsuario(props.usuario._id, e.target.value);
              }}
            >
              {nivelesAPI.map((nivel) => (
                <option
                  vale={nivel.nombreNivel}
                  key={nivel._id}
                  defaultValue={props.usuario.perfilUsuario}
                >
                  {nivel.nombreNivel}
                </option>
              ))}
            </select>
          </div>
        </form>
        <div>
          <Link
            className="btn btn-warning mx-2"
            to={{
              pathname: `/admin/usuarios/${this.props.usuario._id}`,
              state: { usuario: props.usuario },
            }}
          >
            <FontAwesomeIcon icon={faEdit} />
          </Link>

          <Button
            variant="danger"
            onClick={() => eliminarUsuario(props.usuario._id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </div>
      </ListGroup.Item>
    </div>
  );
};

export default LineaUser;
