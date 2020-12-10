import React from 'react';
import Card from "react-bootstrap/esm/Card";

const Propaganda = () => {
    return (
        <div>

<Card className="tarjeta mt-4">
        <img
        id="cuidarnos1"
          className="w-100 mt-0"
          src="./imagenes/publicidad1.jpg"
          height="100%"
          alt="virus"
        />
      </Card>

      <Card className="tarjeta">
         
         <img id="cuidarnos1"
          src="./imagenes/CodoaCodo.jpg" 
          width="100%" alt="mercado libre"/>
          
            </Card>

             <Card className="tarjeta mt-4 w-100">
        <img
        id="cuidarnos1"
          className="w-100 mt-0"
          src="./imagenes/publicidad3.jpg"
         
          alt="coronavirus prevencion"
        />
      </Card>


      
     

      
      <Card className="tarjeta mt-4 w-100">
        <img
        id="cuidarnos1"
          className="w-100 mt-0"
          src="./imagenes/flybondi2.jpg"
         
          alt="flybondi"
        />
      </Card>

      
      <Card className="tarjeta mt-4 w-100">
        <img
        id="cuidarnos1"
          className="w-100 mt-0"
          src="./imagenes/nescafe1.jpg"
         
          alt="nescafe"
        />
      </Card>

      
      <Card className="tarjeta mt-4 w-100">
        <img
        id="cuidarnos1"
          className="w-100 mt-0"
          src="./imagenes/supermercado.jpg"
         
          alt="supermercado"
        />
      </Card>

     
        </div>
    );
};

export default Propaganda;