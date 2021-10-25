import React, { useEffect, useState } from "react";
import {Button, Navbar, Nav, NavDropdown, Form, FormControl, Container, Row, Col, Modal} from 'react-bootstrap';
import axios from "axios";
import store from '../../store/index';
import "../templates.css";

export default function AgregarCarrito(props){
    const {idProducto, idMarca, id} = props;

    function agregar(){
        console.log(idProducto);
        console.log(id);
        console.log(idMarca);
        axios.get("http://localhost:8000/agregarAlCarrito?idUsuario="+ id + "&idMarca=" + idMarca + "&idProducto=" + idProducto).then((res) => {
              console.log(res.data);
          }).catch((error) => {
            console.log(error)
          });
    }

    return(
        <Button onClick={agregar} style={{backgroundColor:'#E3EFF4', color:'#22B8FA', fontSize:'70%'}} className="AgregarCarrito">Agregar al carrito</Button>
    )
}