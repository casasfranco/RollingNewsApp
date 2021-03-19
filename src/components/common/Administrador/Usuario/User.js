import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Container, Jumbotron } from "react-bootstrap";
import TablaUser from "./TablaUser";

const User = () => {
    const [usuariosAPI, setUsuariosAPI] = useState([]);
    const [recargarUsuarios, setRecargarUsuarios] = useState (true);
    
    useEffect(() => {
        if (recargarUsuarios) {
            consultarAPI();
            setRecargarUsuarios(false);
        }
        consultarAPI();
    }, [recargarUsuarios]);

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
            `https://rolling-news-servidor.herokuapp.com/api/usuario/`,
            cabecera
            );
            const resultado = await respuesta.json();
            setUsuariosAPI(resultado);
        } catch (error) {
            console.log(error);
        }
    };


  return (
    <div>
      <Jumbotron className="my-4 text-center">
        <h1>Administración - Usuarios</h1>
      </Jumbotron>
      <Container>
          <div>
          <Button>
           Nuevo Usuario
          </Button>
          </div>
          <TablaUser
          usuariosAPI={usuariosAPI}
          setRecargarUsuarios={setRecargarUsuarios}
          ></TablaUser>
       </Container>
    </div>
  );
};

export default User;
