import React from "react";
import Varias from "./Varias";
import Secundaria from "./Secundaria";

import Publicidad from "./Publicidad";
import NoticiaDestacada from "./NoticiaDestacada";
import Banner from "./Banner";
import Comercial from "./Comercial";

const Nueva = () => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-between ">
          {/* Cards */}
          <div className="col-sm-10 col-md-8 col-xl-8">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-xl-8 ">
                <NoticiaDestacada></NoticiaDestacada>
              </div>
              <div className="col-sm-12 col-md-6 col-xl-4">
                <Secundaria></Secundaria>
              </div>
              <div className="col-sm-12 col-md-6 col-xl-4">
                <Secundaria></Secundaria>
              </div>
              <div className="col-sm-12 col-md-6 col-xl-4">
                <Secundaria></Secundaria>
              </div>
              <div className="col-sm-12 col-md-6 col-xl-4">
                <Secundaria></Secundaria>
              </div>
              <div className="col-sm-12 col-md-12 col-xl-12 ">
                <NoticiaDestacada></NoticiaDestacada>
              </div>

              <div className="col-sm-12 col-md-12 col-xl-12">
                <Comercial></Comercial>
              </div>

              <div className="col-sm-12 col-md-6 col-xl-4">
                <Secundaria></Secundaria>
              </div>

              <div className="col-sm-12 col-md-6 col-xl-4">
                <Publicidad></Publicidad>
              </div>

              <div className="col-sm-12 col-md-6 col-xl-4">
                <Secundaria></Secundaria>
              </div>

              <div className="col-sm-12 col-md-12 col-xl-12">
                <Banner></Banner>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 col-xl-4 mb-4">
            <Varias></Varias>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nueva;
