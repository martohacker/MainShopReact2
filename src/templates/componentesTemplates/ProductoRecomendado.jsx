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
    const {producto, setProductoAVer} = props;

    return (
    <Card className="prodRecomendados" style={{ width: '90%'}}>

            <img className="remeraRecomendada" src={remera} />
            <Card.Title style={{marginTop:'-35%'}} className="tituloRecomendado">{producto.nameProducto}</Card.Title>
            <Card.Text className="precioRecomendado">${producto.precioProducto}</Card.Text>
            <Button onClick={()=>setProductoAVer(producto)} style={{marginTop:'13%'}} variant="primary">Ver producto</Button>
    </Card>
    )

}


/*<Card.Body>
<h3 className="tituloRecomendado">{producto.nameProducto}</h3>
<Card.Text>
${producto.precioProducto}
</Card.Text>
<Button variant="primary">Ver producto</Button>
        </Card.Body>*/