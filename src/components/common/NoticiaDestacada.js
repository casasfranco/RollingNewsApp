import React from "react";
import Card from "react-bootstrap/esm/Card";



const Destacada = (props) => {
  // console.log(props);
  return (
    <div>
      <Card className=" tarjeta p-0 mt-1  w-100 ">
        <Card.Img
          className="mt-0 w-100"
          src={props.noticia.urlImgPrincipalNoticia}
        ></Card.Img>
        <Card.Body className="contenido">
          <p id="tituloDestacada" className="m-0">{props.noticia.tituloPrincipalNoticia}</p>

          <p id="copeteDestacada">
            <a className="text-dark" href="#">
            {props.noticia.copeteNoticia}
            </a>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Destacada;
