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
import db from "../../firebase";

export default function ProductoRecomendado(props){
    const {producto, verProducto} = props;
    const [url, setUrl] = useState(remera);

    async function getImages(){
        var storage = db.storage();
            storage.ref('images/'+producto.imagen+".png").getDownloadURL().then(function(url){
                console.log("hola"+url);
                setUrl(url);
              }).catch(function(error) {
                console.log(error);
              });
    }
    
    getImages()

    return (
    <Card className="prodRecomendados" style={{ width: '90%'}}>

            <img className="remeraRecomendada" src={url} />
            <Card.Title style={{marginTop:'-35%'}} className="tituloRecomendado">{producto.nameProducto}</Card.Title>
            <Card.Text className="precioRecomendado">${producto.precioProducto}</Card.Text>
            <Button onClick={()=>verProducto(producto.idProducto, url)} style={{marginTop:'13%'}} variant="primary">Ver producto</Button>
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