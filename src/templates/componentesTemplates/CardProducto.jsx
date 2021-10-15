import { Card, Button } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import "../templates.css";
import remera from "./RemeraAzul.png";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ModalEditar from "./ModalEditar";
import ModalEliminar from "./ModalEliminar";
import ComponentProductoCompleto from "./ComponentProductoCompleto";
import React, { useEffect, useState } from "react";
import db from "../../firebase";
import AgregarCarrito from "./AgregarCarrito";
import ComprarAhora from "./ComprarAhora";

export default function CardProducto(props){
    const {producto, verProducto, tipo} = props;
    const [url, setUrl] = useState(remera);

    async function getImages(){
        var storage = db.storage();
            storage.ref('images/'+producto.imagen).getDownloadURL().then(function(url){
                console.log("hola"+url);
                setUrl(url);
              }).catch(function(error) {
                console.log(error);
              });
    }
    
    getImages()

    return (
       
         <Col md="1">
             <Card className="cardProducto" style={{ width: '90%' }}>
             <button style={{background:"#603bbb00"}} onClick={()=>verProducto(producto.idProducto, url)} ><img variant="top" src={url} style= {{maxHeight:'120px', minHeight:'120px', width:'100%'}} /></button>
                         <Card.Body>
                            <Card.Title>{producto.nameProducto}</Card.Title>
                            <Card.Text className="precio">${producto.precioProducto} </Card.Text>
                </Card.Body>
             {tipo  == "Marca" ?(
                <>
                <ModalEditar producto={producto}/>
                <ModalEliminar idProducto={producto.idProducto} />
                </>
             ):(
               <>
               <AgregarCarrito/>
               <ComprarAhora/>
               </>
             )}
             </Card>
        </Col>
       )

}
