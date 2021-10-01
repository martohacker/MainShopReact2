import { Card, Button } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import "../templates.css";
import remera from "./RemeraAzul.png";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ModalEditar from "./ModalEditar";
import ModalEliminar from "./ModalEliminar";
import ComponentProductoCompleto from "./ComponentProductoCompleto";
import React, { useEffect, useState } from "react";

export default function CardProducto(props){
    const {producto, verProducto} = props;
    return (
       
         <Col md="1">
             <Card className="cardProducto" style={{ width: '90%' }}>
             <button style={{background:"#603bbb00"}} onClick={()=>verProducto(producto.idProducto)} ><img variant="top" src={remera} style= {{width: '100%'}} /></button>
                         <Card.Body>
                            <Card.Title>{producto.nameProducto}</Card.Title>
                            <Card.Text className="precio">${producto.precioProducto} </Card.Text>
                </Card.Body>
                <ModalEditar producto={producto}/>
                <ModalEliminar idProducto={producto.idProducto} />
             </Card>
        </Col>
       )

}
