import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import LineaUser from "./LineaUser"

const TablaUser = (props) => {
    return (
        <div>
            <Container>
                <h1>Lista de usuarios</h1>
                <ListGroup>
                    {props.usuariosAPI.map((usuario) => (
                     <LineaUser
                     key = {usuario._id}
                     usuario={usuario}
                     setRecargarUsuarios={props.setRecargarUsuarios}
                     ></LineaUser>
                    ))}
                </ListGroup>
            </Container>
        </div>
    );
};

export default TablaUser;