import React, { useEffect, useState } from "react";
import Varias from "./Varias";
import Secundaria from "./Secundaria";

import Publicidad from "./Publicidad";
import NoticiaDestacada from "./NoticiaDestacada";
import Banner from "./Banner";
import Comercial from "./Comercial";

import { News } from "../../services/api/news/news";

const Principal = () => {
  const [noticiasAPI, setNoticiasAPI] = useState([]);
  const [recargarNoticias, setRecargarNoticias] = useState(true);
  const [noticiasOrdenadas, setNoticiasOrdenadas] = useState([]);

  const newsService = new News();

  useEffect(() => {
    if (recargarNoticias) {
      requestApiNews();
      setRecargarNoticias(false);
    }
  }, [recargarNoticias]);

  const requestApiNews = async () => {
    let newsApi = await newsService.getAllNews();
    console.log(newsApi);
    setNoticiasAPI(newsApi);
  };

  function typeOfNotice() {
    let listaDestacadas = [];
    let listaSinDestacadas = [];
    let banderaDestacadas = 0;
    let banderaSinDestacar = 0;

    return noticiasAPI.map((noticia, index) => {
      if (noticia.estadoNoticia && noticia.destacada) {
        //Multiplo de 4 Muestro destacada
        const noticiaHtml = (
          <>
            <div className="col-sm-12 col-md-12 col-xl-12 ">
              <NoticiaDestacada
                noticia={noticia}
                key={noticia._id}
              ></NoticiaDestacada>
            </div>
          </>
        );
        listaDestacadas.push(noticiaHtml);
      } else {
        const noticiaHtml = (
          <div className="col-sm-12 col-md-6 col-xl-4">
            <Secundaria noticia={noticia} key={noticia._id}></Secundaria>
          </div>
        );
        listaSinDestacadas.push(noticiaHtml);
      }

      if (index === noticiasAPI.length - 1) {
        let arrayFinal = [];
        noticiasAPI.forEach((noticia, idx) => {
          console.log(idx);
          if(idx === 0) {
            arrayFinal.push(listaDestacadas[banderaDestacadas]);
            banderaDestacadas++;
          } else if (idx % 5 === 0 && ((idx/5) < listaDestacadas.length)) {
            console.log('Indice: ' +idx);
            arrayFinal.splice(idx+1, 0, listaDestacadas[banderaDestacadas]);
            banderaDestacadas++;

            const htmlComercial = (
              <div className="col-sm-12 col-md-12 col-xl-12">
                <Comercial key={index}></Comercial>
              </div>
            );
            arrayFinal.splice(idx+2, 0, htmlComercial);

          } else {
            console.log(noticia);
            arrayFinal.splice(idx+1, 0, listaSinDestacadas[banderaSinDestacar]);
            banderaSinDestacar++
          }
        });
        return arrayFinal;
      }
      return "";
    });
  }

  return (
    <div>
      <div className="container">
        <div className="row justify-content-between ">
          {/* Cards */}
          <div className="col-sm-10 col-md-8 col-xl-8">
            <div className="row">
              {noticiasAPI.length > 0 ? (
                typeOfNotice()
              ) : (
                <div>
                  <h1 className="display-3">No hay noticias</h1>
                </div>
              )}
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

export default Principal;
