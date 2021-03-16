import React from "react";
import Card from "react-bootstrap/esm/Card";
import Badge from "react-bootstrap/Badge";

const Secundaria = (props) => {
  return (
    <div>
      <Card className="tarjeta shadow my-1 w-100 ">
        <img
          className="mt-0 w-100 h-75 pt-2 px-2 rounded"
          src={props.noticia.urlImgPrincipalNoticia}
          alt={props.noticia.tituloPrincipalNoticia}
        ></img>
        <div className="px-3">
          <Badge className="my-0" variant="danger">
            {props.noticia.categoriaNoticia}
          </Badge>
          <p id="tituloSecundaria" className="m-0">
            {props.noticia.tituloPrincipalNoticia}
          </p>
          <p id="copeteSecundaria">
            <a className="text-dark" href=" #">
              {props.noticia.copeteNoticia}
            </a>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Secundaria;
