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

    /*if (editar) {
      try {
        const cabecera = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("token"),
          },
          body: JSON.stringify(usuario),
        };

        const resultado = await fetch(
          `https://rolling-news-servidor.herokuapp.com/api/usuario/${props.idUsuario}`,
          cabecera
        );
        //Comprobar respuesta
        if (resultado.status === 200) {
          Swal.fire(
            "¡Usuario actualizado con exito!",
            "Los datos del usuario fueron actualizados",
            "Success"
          );
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const cabecera = {
          method: "POST",
          headers: {
            "Content-Type": "applicatuion/json",
            token: localStorage.getItem("token"),
          },
          body: JSON.stringify(usuario),
        };

        const resultado = await fetch(
          "https://rolling-news-servidor.herokuapp.com/api/usuario/",
          cabecera
        );
        //comprobar respuesta
        if (resultado.status === 200) {
          Swal.fire(
            "¡Gracias!",
            "Sus datos fueron enviados y pronto nos contactaremos",
            "success"
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
    e.target.reset();*/
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
                  value: 15,
                  message: "No más de 15 caracteres",
                },
                minLength: {
                  value: 4,
                  message: "Minimo aceptado 4 caracteres",
                },
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Ingrese un nombre válido",
                },
              })}
            />
            <span id="errorNombre" className="text-danger mb-2">
              {errors?.nombre?.message}
            </span>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>
              <h4>Apellido</h4>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Fulanito"
              name="apellido"
              ref={register({
                required: {
                  value: true,
                  message: "Ingrese su apellido",
                },
                maxLength: {
                  value: 15,
                  message: "No más de 15 caracteres",
                },
                minLength: {
                  value: 4,
                  message: "Minimo aceptado 4 caracteres",
                },
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Complete correctamente el campo",
                },
              })}
            />
            <span id="errorApellido" className="text-danger mb-2">
              {errors?.apellido?.message}
            </span>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>
              <h4>Nombre de usuario</h4>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="1linkFullMega"
              name="usuarioNombre"
              ref={register({
                required: {
                  value: true,
                  message: "Elija un nombre de usuario",
                },
                maxLength: {
                  value: 15,
                  message: "No más de 15 caracteres",
                },
                minLength: {
                  value: 4,
                  message: "Minimo aceptado 4 caracteres",
                },
              })}
            />
            <span id="errorUsuarioNombre" className="text-danger mb-2">
              {errors?.usuarioNombre?.message}
            </span>
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
                  value: 15,
                  message: "No más de 15 caracteres",
                },
                minLength: {
                  value: 8,
                  message: "Minimo aceptado 8 caracteres",
                },
              })}
            />
            <span id="errorPass" className="text-danger mb-2">
              {errors?.pass?.message}
            </span>
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
                  value: 30,
                  message: "No más de 30 caracteres",
                },
                minLength: {
                  value: 15,
                  message: "Minimo aceptado 15 caracteres",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Complete correctamente el campo",
                },
              })}
            />
            <span id="errorEmail" className="text-danger mb-2">
              {errors?.email?.message}
            </span>
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
                  value: 15,
                  message: "No más de 15 caracteres",
                },
                minLength: {
                  value: 10,
                  message: "Minimo aceptado 10 caracteres",
                },
                pattern: {
                  value: /^[a-z, A-Z o 0-9\s]+$/,
                  message: "Complete correctamente el campo",
                },
              })}
            />
             <span id="errorDireccion" className="text-danger mb-2">
              {errors?.direccion?.message}
            </span>
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
                  value: 15,
                  message: "No más de 15 caracteres",
                },
                minLength: {
                  value: 8,
                  message: "Minimo aceptado 8 caracteres",
                },
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Complete correctamente el campo",
                },
              })}
            />
             <span id="errorLocalidad" className="text-danger mb-2">
              {errors?.localidad?.message}
            </span>
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
                  value: 8,
                  message: "No más de 8 caracteres",
                },
                minLength: {
                  value: 4,
                  message: "Minimo aceptado 4 caracteres",
                },
                pattern: {
                  value: /^[0-9]+$/i,
                  message: "Solo se aceptan numeros",
                },
              })}
            />
             <span id="errorCp" className="text-danger mb-2">
              {errors?.cp?.message}
            </span>
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
                  value: 15,
                  message: "No más de 15 caracteres",
                },
                minLength: {
                  value: 10,
                  message: "Minimo aceptado 10 caracteres",
                },
                pattern: {
                  value: /^[0-9]+$/i ,
                  message: "Solo se aceptan numeros",
                },
              })}
            />
             <span id="errorTelefono" className="text-danger mb-2">
              {errors?.telefono?.message}
            </span>
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
