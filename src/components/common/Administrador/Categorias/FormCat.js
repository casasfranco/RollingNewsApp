import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const FormCat = () => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = async (data, e) => {
    console.log("anda perro");
    //Estuctura del objeto de la base de datos
    const categoria = {
      nombreCat: data.nombreCategoria,
      descripcionCat: data.descripcionCategoria,
      estadoCat: true,
    };

    try {
      const cabecera = {
        method: "POST",
        headers: {
          "Content-Type": "application/jason",
          token: localStorage.getItem("token"),
        },
        body: JSON.stringify(categoria),
      };

      const resultado = await fetch(
        "https://rolling-news-servidor.herokuapp.com/api/categoria/",
        cabecera
      );

      if (resultado.status === 200) {
        Swal.fire(
          "Categoria creada",
          "La categoria se creo correctamente",
          "success"
        );
      }
    } catch (error) {
      console.log(error);
    }
    e.target.reset();
  };

  return (
    <div>
      <Jumbotron fluid>
        <Container className="text-center">
          <h1>Ingresar nueva categoria</h1>
          <p>
            Complete correctamente el formulario
          </p>
        </Container>
      </Jumbotron>
      <Container>
        <Form className="my-5 bg-light p-3" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>
              <h4>Nombre de la categoria:</h4>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Actualidad"
              name="nombreCategoria"
              ref={register({
                required: {
                  value: true,
                  message: "Ingrese una categoria",
                },
                maxLength: {
                  value: 15,
                  message: "No más de 15 caracteres",
                },
                minLength: {
                  value: 5,
                  message: "Mínimo al menos 5 caracteres",
                },
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Ingrese una categoria válida",
                },
              })}
            />
            <span id="errorNombre" className="text-danger mb-2">
              {errors?.nombreCategoria?.message}
            </span>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>
              <h4>Descripción:</h4>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Noticias sobre..."
              name="descripcionCategoria"
              ref={register({
                required: {
                  value: true,
                  message: "Ingrese una descripción",
                },
                maxLength: {
                  value: 40,
                  message: "No más de 40 caracteres",
                },
                minLength: {
                  value: 10,
                  message: "Mínimo al menos 10 caracteres",
                },
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Complete correctamente el campo",
                },
              })}
            />
            <span id="errorDescripcion" className="text-danger mb-2">
              {errors?.descripcionCategoria?.message}
            </span>
          </Form.Group>
          <Button variant="danger" type="submit">
            Agregar
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default FormCat;
