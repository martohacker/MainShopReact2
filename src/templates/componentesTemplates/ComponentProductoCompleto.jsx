import remera from "./RemeraAzul.png";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ModalEditar from "./ModalEditar";
import ModalEliminar from "./ModalEliminar";
import React, { useEffect, useState } from "react";
import { Card, Button, Carousel } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import "./ProductoCompleto.css"
import ComponentElegirTalle from "./ComponentElegirTalle";
import ElegirColor from "./ElegirColor";
import ProductoRecomendado from "./ProductoRecomendado";
import CarouselProds from "./CarouselProds";


export default function (props){
    const {verProducto, producto, productos, url} = props;
    return (
      
            <Row>   
            <h1 style={{marginTop:'3%'}} className="titulo">{producto.nameProducto}</h1>
            <hr/>
            <Col md="6"> 
            
            <img className="imagen" src={url} />
                <div className="eleccion">
                    <h3 className="precioCompleto">${producto.precioProducto}</h3>
                    <span onClick="" className="Envios" >Envíos gratis a todo el país</span>
                    <h4 className="Metodos" >Métodos de pago</h4>
                     <ComponentElegirTalle talles={producto.descripcion.talle}/>
                    <ElegirColor colores={producto.descripcion.color} /> 
                    <Button style={{backgroundColor:'#E3EFF4', color:'#22B8FA'}} className="Agregar">Agregar al carrito</Button>
                    <Button className="Comprar">Comprar ahora</Button>
                 </div>
                 <h1 className="recomendacion">Productos recomendados</h1>
                 <hr className="division"/>
                 <CarouselProds className="Carousel" verProducto={verProducto} producto={producto} productos={productos}/>
            
                 
            </Col>
            <Col md="6">
           <h1 className="Info">Información sobre el producto</h1>
              <h3 className="texto">{producto.descripcion.texto}</h3>
            </Col>
            </Row> 
         
    )
}