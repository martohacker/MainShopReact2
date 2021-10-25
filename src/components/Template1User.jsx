import { Col, Container, Row, InputGroup, FormControl } from "react-bootstrap";
import CardProducto from "../templates/componentesTemplates/CardProducto";
import ComponentProductoCompleto from "../templates/componentesTemplates/ComponentProductoCompleto";
import "./HomeUser.css"
import React, { useEffect, useState } from "react";
import remera from "../templates/componentesTemplates/RemeraAzul.png";


export default function Template1(props) {
const {id, idMarca, tipo, url, productos} = props;
const [productoAVer, setProductoAVer] = useState("");
const [boton, setBoton] = useState(false);
const [urlProd, setUrl] = useState("");
console.log(productos);

function verProducto(idProducto, url){
    setBoton(true);
    setUrl(url)
    productos.forEach(element => {
        if (element.idProducto == idProducto){
            console.log(element);
            setProductoAVer(element);
        }
    });
}
    return (
        productoAVer && boton ? (
            <ComponentProductoCompleto url={urlProd} verProducto={verProducto} productos={productos} producto = {productoAVer} />
        ) : (
        <>
         <img src={url} className="logo" ></img>
        <Row style={{marginLeft:0, marginRight:0}}>
    {productos.map((prod)=>(
            <CardProducto id={id} idMarca={idMarca} tipo={tipo} key={prod.idProducto} verProducto={verProducto} producto={prod} />
        )) }
        
        </Row>
   </>
   )
    )
}