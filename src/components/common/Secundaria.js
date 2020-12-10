import React from "react";
import Card from "react-bootstrap/esm/Card";
import Badge from "react-bootstrap/Badge";

const Horizontal = () => {
  return (
    <div>
      <Card className="tarjeta shadow my-1 w-100 ">
        <img
          className="mt-0 w-100 h-75 pt-2 px-2 rounded"
          src="https://picsum.photos/300/150?random"
        ></img>
          <div className="px-3">
          <Badge className="my-0" variant="danger">
            Categoria
          </Badge>
          <p id="tituloSecundaria" className="m-0">Titulo</p>
          <p id="copeteSecundaria">
             <a className="text-dark" href=" #">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam magnam dignissimos/ cuale esESSS
            </a>
          </p>
          </div>
      </Card>
    </div>
  );
};

export default Horizontal;
