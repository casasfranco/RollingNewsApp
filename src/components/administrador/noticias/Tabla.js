import React,{Fragment} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import AdministrarNoticia from './AdministarNoticia';
import { Link } from "react-router-dom";





const Tabla = (props) => {
    
    return (
        <Fragment>
            <div className="container d-flex justify-content-between my-4">
            <h1 >Lista de Noticias</h1>
            
            <Link to ={'/admin/noticia/nueva'} className="btn btn-dark"> crear noticia</Link>
            </div>
             <ListGroup>
                 {props.noticiasAPI.map((noticia)=> <AdministrarNoticia  key ={noticia.id} noticia ={noticia}  setRecargarNoticias = {props.setRecargarNoticias}></AdministrarNoticia>)}

             </ListGroup>
        </Fragment>
    );
};

export default Tabla;