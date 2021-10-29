import { Col, Container, Row, InputGroup, FormControl } from "react-bootstrap";
import CardProducto from "../templates/componentesTemplates/CardProducto";
import ComponentProductoCompleto from "../templates/componentesTemplates/ComponentProductoCompleto";
import "./HomeUser.css"
import React, { useEffect, useState } from "react";
import remera from "../templates/componentesTemplates/RemeraAzul.png";
import axios from "axios";


export default function Template1(props) {
const {id, idMarca, tipo, url, productos} = props;
const [productoAVer, setProductoAVer] = useState("");
const [boton, setBoton] = useState(false);
const [urlProd, setUrl] = useState("");
console.log(productos);

function agregar(idProducto){
    console.log(idProducto);
    console.log(id);
    console.log(idMarca);
    axios.get("http://localhost:8000/agregarAlCarrito?idUsuario="+ id + "&idMarca=" + idMarca + "&idProducto=" + idProducto).then((res) => {
          console.log(res.data);
      }).catch((error) => {
        console.log(error)
      });
}

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
            <ComponentProductoCompleto agregar={agregar} url={urlProd} verProducto={verProducto} id={id} idMarca={idMarca} productos={productos} producto = {productoAVer} />
        ) : (
        <>
         <img src={url} className="logo" ></img>
        <Row style={{marginLeft:0, marginRight:0}}>
    {productos.map((prod)=>(
            <CardProducto agregar={agregar} tipo={tipo} key={prod.idProducto} verProducto={verProducto} producto={prod} />
        )) }
        
        </Row>
   </>
   )
    )
}