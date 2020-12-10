import React from 'react';
import Card from "react-bootstrap/esm/Card";

const Banner = () => {
    return (
        <div>
              <Card className="tarjeta mt-4 ml-5">
        <img
        id="cuidarnos2"
          className="w-100 mt-0"
          src="./imagenes/cuidarnos.jpg"
          height="100%"
          alt="cuidarnos"
        />
      </Card>
            
        </div>
    );
};

export default Banner;