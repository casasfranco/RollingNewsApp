import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";

const Registro = () => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = async (data, e) => {
    console.log("a  verrr si funciona");
    const usuario = {
      nombre: data.nombre,
      apellido: data.apellido,
      nombreUsuario: data.nombreUsuario,
      passUsuario: data.passUsuario,
      emailUsuario: data.emailUsuario,
      direccionUsuario: data.direccionUsuario,
      localidadUsuario: data.localidadUsuario,
      cpUsuario: data.cpUsuario,
      numTelefonoUsuario: data.numTelefonoUsuario,
      perfilUsuario: "publico",
      estadoUsuario: false,
    };
  };

  return (
    <div>
      <Container>
        <Jumbotron className="text-center">
          <h1>Suscripción</h1>
          <h5>
            Completa el formulario para recibir toda la información del pais y
            el mundo en un instante.
          </h5>
        </Jumbotron>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>
              <h4>Nombre</h4>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Cosme"
              name="nombre"
              ref={register({
                required: {
                  value: true,
                  message: "Ingrese su nombre",
                },
                maxLength: {
                  value: true,
                  message: "No más de 15 caracteres",
                },
                minLength: {
                  value: true,
                  message: "Minimo aceptado 4 caracteres",
                },
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Ingrese un nombre válido",
                },
              })}
            />
            <span id="errorNombre" className="text-danger mb-2">
              {errors?.nombreCategoria?.message}
            </span>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>
              <h4>Apellido</h4>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Fulanito"
              name="nombre"
              ref={register({
                required: {
                  value: true,
                  message: "Ingrese su apellido",
                },
                maxLength: {
                  value: true,
                  message: "No más de 15 caracteres",
                },
                minLength: {
                  value: true,
                  message: "Minimo aceptado 4 caracteres",
                },
              })}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>
              <h4>Nombre de usuario</h4>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="1linkFullMega"
              name="apellido"
              ref={register({
                required: {
                  value: true,
                  message: "Ingrese su apellido",
                },
                maxLength: {
                  value: true,
                  message: "No más de 15 caracteres",
                },
                minLength: {
                  value: true,
                  message: "Minimo aceptado 4 caracteres",
                },
              })}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>
              <h4>Contraseña</h4>
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="********"
              name="pass"
              ref={register({
                required: {
                  value: true,
                  message: "Ingrese una contraseña",
                },
                maxLength: {
                  value: true,
                  message: "No más de 15 caracteres",
                },
                minLength: {
                  value: true,
                  message: "Minimo aceptado 8 caracteres",
                },
              })}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>
              <h4>Email</h4>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="el-mas-mejor@ymail.com"
              name="email"
              ref={register({
                required: {
                  value: true,
                  message: "Ingrese su correo electrónico",
                },
                maxLength: {
                  value: true,
                  message: "No más de 30 caracteres",
                },
                minLength: {
                  value: true,
                  message: "Minimo aceptado 15 caracteres",
                },
              })}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>
              <h4>Dirección</h4>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="General Paz 999"
              name="direccion"
              ref={register({
                required: {
                  value: true,
                  message: "Ingrese una direccion",
                },
                maxLength: {
                  value: true,
                  message: "No más de 15 caracteres",
                },
                minLength: {
                  value: true,
                  message: "Minimo aceptado 10 caracteres",
                },
              })}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>
              <h4>Localidad</h4>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Choromoro"
              name="localidad"
              ref={register({
                required: {
                  value: true,
                  message: "Ingrese una localidad",
                },
                maxLength: {
                  value: true,
                  message: "No más de 15 caracteres",
                },
                minLength: {
                  value: true,
                  message: "Minimo aceptado 8 caracteres",
                },
              })}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>
              <h4>Código Postal</h4>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="54321"
              name="cp"
              ref={register({
                required: {
                  value: true,
                  message: "Ingrese su código postal",
                },
                maxLength: {
                  value: true,
                  message: "No más de 8 caracteres",
                },
                minLength: {
                  value: true,
                  message: "Minimo aceptado 4 caracteres",
                },
              })}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>
              <h4>Teléfono</h4>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="1145746984"
              name="telefono"
              ref={register({
                required: {
                  value: true,
                  message: "Ingrese un telefono",
                },
                maxLength: {
                  value: true,
                  message: "No más de 15 caracteres",
                },
                minLength: {
                  value: true,
                  message: "Minimo aceptado 10 caracteres",
                },
              })}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Confirmar datos" />
          </Form.Group>
          <Button variant="danger" type="submit">
            Registrar
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Registro;
