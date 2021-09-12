import remera from "./RemeraAzul.png";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ModalEditar from "./ModalEditar";
import ModalEliminar from "./ModalEliminar";
import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import "./ProductoCompleto.css"
import ComponentElegirTalle from "./ComponentElegirTalle";
import ElegirColor from "./ElegirColor";

export default function ProductoRecomendado(props){
    const {producto} = props;

    return (
    <Card className="prodRecomendados" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>{producto.nameProducto}</Card.Title>
            <Card.Text>
           ${producto.precioProducto}
            </Card.Text>
            <Button variant="primary">Ver producto</Button>
        </Card.Body>
    </Card>
    )

}