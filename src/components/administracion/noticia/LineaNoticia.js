import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const LineaNoticia = (props) => {
  return (
    <>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td className="bg-white">
          <Link
            to={{
              pathname: `/admin/noticia/${props.noticia._id}`,
              state: { noticia: props.noticia },
            }}
          >
            <Button variant="primary">Editar</Button>{" "}
          </Link>
          <Link
            to={{
              pathname: `/admin/noticia/${props.noticia._id}`,
              state: { noticia: props.noticia },
            }}
          >
            <Button variant="warning">Destacar</Button>{" "}
          </Link>
          <Link>
            <Button variant="success">Eliminar</Button>{" "}
          </Link>
        </td>
      </tr>

      {/* to={{ pathname: `/admin/noticias/${props.noticia._id}`, state: { noticia: props.noticia}}} */}
    </>
  );
};

export default LineaNoticia;
