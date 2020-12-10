import React from "react";
import Card from "react-bootstrap/esm/Card";



const Destacada = () => {
  return (
    <div>
      <Card className=" tarjeta p-0 mt-1  w-100 ">
        <Card.Img
          className="mt-0 w-100"
          src="https://picsum.photos/300/150?random"
        ></Card.Img>
        <Card.Body className="contenido">
          <p id="tituloDestacada" className="m-0">Titulo</p>

          <p id="copeteDestacada">
            <a className="text-dark" href="#">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam magnam dignissimos, iure obcaecati perspiciatis beatae,
              fuga, quam soluta dolores sint ipsa quasi
            </a>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Destacada;
