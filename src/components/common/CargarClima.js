import React from "react";

const CargarClima = ({ climaAPI }) => {
  console.log(climaAPI?.current);

  return (
    <div className="container tiempo">
      <div className="row-clima">
        <div className="col1 d-flex mt-3">
          {climaAPI?.location ? (
            <p className="ml-1">{climaAPI.location.name}</p>
          ) : null}

          {climaAPI?.current ? (
            <p className="ml-2">{climaAPI.current.temperature}°</p>
          ) : null}
        </div>

        <div className="col2">
          {climaAPI?.current ? (
            <img
              src={climaAPI.current.weather_icons}
              className=" ml-3 mt-2 img-fluid iconos-api"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CargarClima;
