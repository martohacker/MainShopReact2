import remera from "./RemeraAzul.png";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ModalEditar from "./ModalEditar";
import ModalEliminar from "./ModalEliminar";
import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import "./ProductoCompleto.css"
import ComponentElegirTalle from "./ComponentElegirTalle";

export default function (props){
    const {producto} = props;
    return (
        <Row>
            <h1 className="titulo">{producto.nameProducto}</h1>
            <hr/>
            <Col md="6">
            <img className="imagen" src={remera} />
            <h3 className="precio">${producto.precioProducto}</h3>
            <span onClick="" className="Envios" >Envíos gratis a todo el país</span>
            <h4 className="Metodos" >Métodos de pago</h4>
            <ComponentElegirTalle></ComponentElegirTalle>
            </Col>
        </Row>
    )
}