import React, { Fragment, useState, useRef } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

const Edicion = (props) => {
  const volantaRef = useRef("");
  const tituloRef = useRef("");
  const copeteRef = useRef("");
  const imagenRef = useRef("");
  const cuerpoRef = useRef("");
  const imgSecundariaRef = useRef("");
  const autorRef = useRef("");
  const categoriaRef = useRef("");
  const fechaRef = useRef("");
  const tipoRef = useRef("");

  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //valido los datos
    if (
      volantaRef.current.value === "" ||
      tituloRef.current.value === "" ||
      copeteRef.current.value === "" ||
      imagenRef.current.value === "" ||
      categoriaRef.current.value === "" ||
      fechaRef.current.value === "" ||
      autorRef.current.value === "" ||
      tipoRef.current.value === ""
    ) {
      setError(true);
      return;
    }

    setError(false);

    //guardo datos modificados
    const noticiaEditada = {
      volantaNoticia: volantaRef.current.value,
      tituloPrincipalNoticia: tituloRef.current.value,
      copeteNoticia: copeteRef.current.value,
      urlImgPrincipalNoticia: imagenRef.current.value,
      cuerpoNoticia: cuerpoRef.current.value,
      urlImgOpcionalNoticia: imgSecundariaRef.current.value,
      categoriaNoticia: categoriaRef.current.value,
      fechaNoticia: fechaRef.current.value,
      autorNoticia: autorRef.current.value,
      tipoNoticia: tipoRef.current.value,
    };
    // envio los datos
    try {
      const respuesta = await fetch(
        `http://localhost:3000/noticia/${props.noticiaSeleccionada.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(noticiaEditada),
        }
      );
      console.log(respuesta);
      if (respuesta.status === 200) {
        Swal.fire(
          "Noticia modificada",
          "La noticia se modifico correctamente",
          "success"
        );
        props.setRecargarNoticias(true);
        props.history.push("/admin/noticia/tabla");
      }
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

        {error ? (
          <Alert variant={"danger"} className="container mb-2"> Todos Los campos son obligatorios</Alert>
        ) : null}

        <Container>
          <div className="p-5 my-4">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Volanta</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Antetitulo"
                  name="volantaNoticia"
                  ref={volantaRef}
                  defaultValue={props.noticiaSeleccionada.volantaNoticia}
                />
              </Form.Group>
              <Form.Group controlId="tituloPrincipalNoticia">
                <Form.Label>Titulo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Titulo principal"
                  name="tituloPrincipalNoticia"
                  ref={tituloRef}
                  defaultValue={
                    props.noticiaSeleccionada.tituloPrincipalNoticia
                  }
                />
              </Form.Group>
              <Form.Group controlId="copeteNoticia">
                <Form.Label>Descripción breve</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Informacion"
                  name="copeteNoticia"
                  ref={copeteRef}
                  defaultValue={props.noticiaSeleccionada.copeteNoticia}
                />
              </Form.Group>
              <Form.Group controlId="urlImgPrincipalNoticia">
                <Form.Label>Imagen principal</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="https://www.lanacion.com.ar/sociedad/coronavirus-argentina-199-dias-del-primer-contagio-nid2453198"
                  name="urlImgPrincipalNoticia"
                  ref={imagenRef}
                  defaultValue={
                    props.noticiaSeleccionada.urlImgPrincipalNoticia
                  }
                />
              </Form.Group>
              <Form.Group controlId="cuerpoNoticia">
                <Form.Label>Cuerpo de la noticia</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={10}
                  type="text"
                  placeholder="Desarrollo de la noticia..."
                  name="cuerpoNoticia"
                  ref={cuerpoRef}
                  defaultValue={props.noticiaSeleccionada.cuerpoNoticia}
                />
              </Form.Group>
              <Form.Group controlId="urlImgOpcionalNoticia">
                <Form.Label>Imagen secundaria (opcional)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="https://www.lanacion.com.ar/sociedad/coronavirus-argentina-199-dias-del-primer-contagio-nid2453198"
                  name="urlImgOpcionalNoticia"
                  ref={imgSecundariaRef}
                  defaultValue={props.noticiaSeleccionada.urlImgOpcionalNoticia}
                />
              </Form.Group>
              <Form.Group controlId="autorNoticia">
                <Form.Label>Autor</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Juan Perez"
                  name="autorNoticia"
                  ref={autorRef}
                  defaultValue={props.noticiaSeleccionada.autorNoticia}
                />
              </Form.Group>

              <Form.Group controlId="categoriaNoticia">
                <Form.Label>Categoria</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="Seleccione..."
                  name="categoriaNoticia"
                  ref={categoriaRef}
                  defaultValue={props.noticiaSeleccionada.categoriaNoticia}
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
              </Form.Group>

              <Form.Group controlId="updatedAt">
                <Form.Label>Fecha de publicación</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="22/09/2020"
                  name="fechaNoticia"
                  ref={fechaRef}
                  defaultValue={props.noticiaSeleccionada.fechaNoticia}
                />
              </Form.Group>

              <Form.Group controlId="tipoNoticia">
                <Form.Label>Tipo Noticia</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="Seleccione..."
                  name="tipoNoticia"
                  ref={tipoRef}
                  defaultValue={props.noticiaSeleccionada.tipoNoticia}
                >
                  <option value="">Seleccionar Tipo de Noticia</option>
                  <option value="destacada">Destacada</option>
                  <option value="secundaria">Secundaria</option>
                </Form.Control>
              </Form.Group>

              <Button variant="dark" size="lg" type="submit">
                Guardar
              </Button>
            </Form>
          </div>
        </Container>
      </Fragment>
    </div>
  );
};

export default withRouter(Edicion);
