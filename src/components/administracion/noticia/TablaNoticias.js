import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import LineaNoticia from "./LineaNoticia";

const TablaNoticias = (props) => {
  return (
    <div className="mt-4">
      <Table
        striped
        bordered
        hover
        className="shadow p-3 mb-5 bg-body rounded text-center"
      >
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
            <LineaNoticia noticia={{_id: 'asdasdasdasd'}}></LineaNoticia>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td className="bg-white">
              <Link to="/admin/noticia" >
                <Button variant="primary">Editar</Button>{" "}
              </Link>
              <Button variant="warning">Destacar</Button>{" "}
              <Button variant="success">Eliminar</Button>{" "}
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
            <td colSpan="2">Larry the Bird</td>
            <td className="bg-white">
              <Link to="/admin/noticia">
                <Button variant="primary">Editar</Button>{" "}
              </Link>
              <Button variant="warning">Destacar</Button>{" "}
              <Button variant="success">Eliminar</Button>{" "}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TablaNoticias;
