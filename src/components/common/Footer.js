import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="container">
      <article className="bg-light m-0 row">
        <div className="text-center col-sm-12 col-md-4 mt-3">
        <img className="w-50 mb-4" id="img-footer" src="./imagenes/rolling-3.jpg" alt="Logo de Rolling News"></img>
          <div className="">
            <Link to={`/error404`} className="text-dark">
              <FontAwesomeIcon
                icon={faFacebookSquare}
                size="3x"
                fixedWidth
              ></FontAwesomeIcon>
            </Link>
            <Link to={`/error404`} className="text-dark">
              <FontAwesomeIcon
                icon={faInstagramSquare}
                size="3x"
                fixedWidth
              ></FontAwesomeIcon>
            </Link>
            <Link to={`/error404`} className="text-dark">
              <FontAwesomeIcon
                icon={faTwitterSquare}
                size="3x"
                fixedWidth
              ></FontAwesomeIcon>
            </Link>
          </div>
        </div>
        <div className="text-center col-sm-12 col-md-4 mt-3">
          <h3 className="">Contacto</h3>
          <FontAwesomeIcon icon={faEnvelope} size="2x"></FontAwesomeIcon>
          <h6 className="py-4">Correo electronico: RollingNews@gmail.com</h6>
          <FontAwesomeIcon icon={faPhoneAlt} size="2x"></FontAwesomeIcon>
          <h6 className="py-4">Celular: 3814729241</h6>
        </div>
        <div className="text-center col-sm-12 col-md-4 mt-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2689484194984!2d-73.99238078430744!3d40.756109042852344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259acb56ab52f%3A0x1b0e6f6f1b739ea3!2sNew%20York%20Times%20Bldg%2C%20620%208th%20Ave%2C%20New%20York%2C%20NY%2010018%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1600146427162!5m2!1ses-419!2sar"
            width="300"
            height="250"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
          <Link to={`/error404`} className="text-dark">
            <h5 className="pt-3">Politicas de privacidad</h5>
          </Link>
        </div>
      </article>
      <h5 className="bg-light text-center py-4">
        &copy; RollingNews - Derechos reservados
      </h5>
    </section>
  );
};

export default Footer;
