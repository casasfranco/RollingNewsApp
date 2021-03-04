import React, { Fragment, useEffect, useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";

const NuevaNoticia = (props) => {
  // validacion con react hook form
  const { register, errors, handleSubmit } = useForm({});

  const [noticias, setNoticias] = useState({
    volantaNoticia: "",
    tituloPrincipalNoticia: "",
    copeteNoticia: "",
    urlImgPrincipalNoticia: "",
    cuerpoNoticia: "",
    urlImgOpcionalNoticia: "",
    autorNoticia: "",
    fechaNoticia: "",
    categoriaNoticia: "",
    tipoNoticia: "",
  });

  const noticiaActual = (e) => {
    setNoticias({
      ...noticias,
      [e.target.name]: e.target.value,
    });
  };
 

  /*estado de tipo de noticia
const [tipo, setTipo] = useState("");
  
const elegirTipo = (e) => {
  setTipo(e.target.value);
 
};*/

  const onSubmit = async (data, e) => {
    e.preventDefault();

    const noticiaValidacion = {
      volantaNoticia: data.volantaNoticia,
      tituloPrincipalNoticia: data.tituloPrincipalNoticia,
      copeteNoticia: data.copeteNoticia,
      urlImgPrincipalNoticia: data.urlImgPrincipalNoticia,
      cuerpoNoticia: data.cuerpoNoticia,
      urlImgOpcionalNoticia: data.urlImgOpcionalNoticia,
      autorNoticia: data.autorNoticia,
      fechaNoticia: data.fechaNoticia,
      categoriaNoticia: data.categoriaNoticia,
      tipoNoticia: data.tipoNoticia,
    };

    try {
      const cabecera = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(noticias),
      };
      const resultado = await fetch("http://localhost:3000/noticia", cabecera);
      console.log(resultado);
      //Compruebo la respuesta
      if (resultado.status === 201) {
        Swal.fire(
          "Noticia creada",
          "La noticia se creo correctamente",
          "success"
        );
      }
      //recargar la API de noticias
      props.setRecargarNoticias(true)
      props.history.push("admin/noticia/tabla");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Fragment>
        <Jumbotron className="text-center">
          <h1>Nueva Noticia</h1>
        </Jumbotron>
        <Container>
          <div className="p-5 my-4">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Volanta</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Antetitulo"
                  name="volantaNoticia"
                  ref={register({
                    required: {
                      value: true,
                      message: "Ingrese un antetitulo",
                    },
                    maxLength: {
                      value: 80,
                      message: "No más de 40 carácteres",
                    },
                    minLength: {
                      value: 5,
                      message: "Mínimo 5 carácteres",
                    },
                  })}
                  onChange={noticiaActual}
                />

                <span id="errorVolanta" className="text-danger mb-2">
                  {errors?.volantaNoticia?.message}
                </span>
              </Form.Group>
              <Form.Group controlId="tituloPrincipalNoticia">
                <Form.Label>Titulo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Titulo principal"
                  name="tituloPrincipalNoticia"
                  ref={register({
                    required: {
                      value: true,
                      message: "Ingrese un titulo",
                    },
                    maxLength: {
                      value: 100,
                      message: "No más de 60 carácteres",
                    },
                    minLength: {
                      value: 5,
                      message: "Mínimo 5 carácteres",
                    },
                  })}
                  onChange={noticiaActual}
                />
                <span id="errorTitulo" className="text-danger mb-2">
                  {errors?.tituloPrincipalNoticia?.message}
                </span>
              </Form.Group>
              <Form.Group controlId="copeteNoticia">
                <Form.Label>Descripción breve</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Informacion"
                  name="copeteNoticia"
                  ref={register({
                    required: {
                      value: true,
                      message: "Agregue una descripción",
                    },
                    maxLength: {
                      value: 250,
                      message: "No más de 250 carácteres",
                    },
                    minLength: {
                      value: 10,
                      message: "Mínimo 10 carácteres",
                    },
                  })}
                  onChange={noticiaActual}
                />
                <span id="errorCopete" className="text-danger mb-2">
                  {errors?.copeteNoticia?.message}
                </span>
              </Form.Group>
              <Form.Group controlId="urlImgPrincipalNoticia">
                <Form.Label>Imagen principal</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="https://www.lanacion.com.ar/sociedad/coronavirus-argentina-199-dias-del-primer-contagio-nid2453198"
                  name="urlImgPrincipalNoticia"
                  ref={register({
                    required: {
                      value: true,
                      message: "Agregue una imagen principal",
                    },
                    maxLength: {
                      value: 200,
                      message: "No más de 200 carácteres",
                    },
                    minLength: {
                      value: 3,
                      message: "Mínimo 3 carácteres",
                    },
                  })}
                />
                <span
                  id="errorUrlImgPrincipalNoticia"
                  className="text-danger mb-2"
                >
                  {errors?.urlImgPrincipalNoticia?.message}
                </span>
              </Form.Group>
              <Form.Group controlId="cuerpoNoticia">
                <Form.Label>Cuerpo de la noticia</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={10}
                  type="text"
                  placeholder="Desarrollo de la noticia..."
                  name="cuerpoNoticia"
                  ref={register({
                    required: {
                      value: true,
                      message: "Complete el campo requerido",
                    },
                    maxLength: {
                      value: 10000,
                      message: "No más de 10000 carácteres",
                    },
                    minLength: {
                      value: 15,
                      message: "Mínimo 15 carácteres",
                    },
                  })}
                  onChange={noticiaActual}
                />
                <span id="errorCuerpoNoticia" className="text-danger mb-2">
                  {errors?.cuerpoNoticia?.message}
                </span>
              </Form.Group>
              <Form.Group controlId="urlImgOpcionalNoticia">
                <Form.Label>Imagen secundaria (opcional)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="https://www.lanacion.com.ar/sociedad/coronavirus-argentina-199-dias-del-primer-contagio-nid2453198"
                  name="urlImgOpcionalNoticia"
                  ref={register({
                    required: {
                      value: false,
                      message: "Agregue una imagen de opcional",
                    },
                    maxLength: {
                      value: 200,
                      message: "No más de 200 carácteres!",
                    },
                    minLength: {
                      value: 5,
                      message: "Mínimo 5 carácteres",
                    },
                  })}
                  onChange={noticiaActual}
                />
                <span
                  id="errorUrlImgOpcionalNoticia"
                  className="text-danger mb-2"
                >
                  {errors?.urlImgOpcionalNoticia?.message}
                </span>
              </Form.Group>
              <Form.Group controlId="autorNoticia">
                <Form.Label>Autor</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Juan Perez"
                  name="autorNoticia"
                  ref={register({
                    required: {
                      value: true,
                      message: "Ingrese el nombre del autor",
                    },
                    maxLength: {
                      value: 20,
                      message: "No más de 20 carácteres!",
                    },
                    minLength: {
                      value: 3,
                      message: "Mínimo 5 carácteres",
                    },
                    pattern: {
                      value: /^[A-Za-z\s]+$/g,
                      message: "Ingrese solo texto",
                    },
                  })}
                  onChange={noticiaActual}
                />
                <span id="errorAutor" className="text-danger mb-2">
                  {errors?.autorNoticia?.message}
                </span>
              </Form.Group>

              <Form.Group controlId="categoriaNoticia">
                <Form.Label>Categoria</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="Seleccione..."
                  name="categoriaNoticia"
                  ref={register({
                    required: {
                      value: true,
                      message: "Seleccione una categoria",
                    },
                  })}
                  onChange={noticiaActual}
                >
                  <option value="">Seleccionar Categoria</option>
                  <option value="politica">Politica</option>
                  <option value="deportes">Deportes</option>
                  <option value="economia">Economia</option>
                  <option value="internacional">Internacional</option>
                  <option value="fotografia">Fotografia</option>
                  <option value="espectaculos">Espectáculos</option>
                  <option value="actualidad">Actualidad</option>
                  <option value="tecnologia">Tecnología</option>

                  <option value="policiales">Policiales</option>
                </Form.Control>

                {errors.categoriaNoticia && (
                  <span id="categoriaNoticia" className="text-danger mb-2">
                    {errors?.categoriaNoticia?.message}
                  </span>
                )}
              </Form.Group>

              <Form.Group controlId="updatedAt">
                <Form.Label>Fecha de publicación</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="22/09/2020"
                  name="fechaNoticia"
                  ref={register({
                    required: {
                      value: true,
                      message: "Ingrese una fecha válida",
                    },
                    pattern: {
                      value: /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/,
                      message: "Ingrese una fecha válida",
                    },
                  })}
                  onChange={noticiaActual}
                />
                <span id="errorFecha" className="text-danger mb-2">
                  {errors?.fechaNoticia?.message}
                </span>
              </Form.Group>

              <Form.Group controlId="tipoNoticia">
                <Form.Label>Tipo Noticia</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="Seleccione..."
                  name="tipoNoticia"
                  ref={register({
                    required: {
                      value: true,
                      message: "Seleccione un tipo de noticia",
                    },
                  })}
                  onChange={noticiaActual}
                >
                  <option value="">Seleccionar Tipo de Noticia</option>
                  <option value="destacada">Destacada</option>
                  <option value="secundaria">Secundaria</option>
                </Form.Control>

                {errors.categoriaNoticia && (
                  <span id="tipoNoticia" className="text-danger mb-2">
                    {errors?.tipoNoticia?.message}
                  </span>
                )}
              </Form.Group>

              <Button variant="dark" size="lg" type="submit">
                Publicar
              </Button>
            </Form>
          </div>
        </Container>
      </Fragment>
    </div>
  );
};

export default withRouter(NuevaNoticia);
