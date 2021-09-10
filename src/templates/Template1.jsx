import { Col, Container, Row, InputGroup, FormControl } from "react-bootstrap";
import CardProducto from "./componentesTemplates/CardProducto";
import Logo from "./componentesTemplates/LogoNike.png"
import './templates.css';
import ModalAgregar  from "./componentesTemplates/ModalAgregar";
import ComponentProductoCompleto from "./componentesTemplates/ComponentProductoCompleto";
import React, { useEffect, useState } from "react";


export default function Template1(props) {
const {productos} = props;
const [productoAVer, setProductoAVer] = useState("");

function verProducto(idProducto){
    productos.forEach(element => {
        if (element.idProducto == idProducto){
            setProductoAVer(element);
        }
    });
}
    return (
        productoAVer ? (
            <ComponentProductoCompleto producto = {productoAVer} />
        ) : (
        <>
         <img src={Logo} className="logo"></img>
     <Row>
         <Col md="2">
             <ModalAgregar/>
         </Col>
    </Row>   
    <Row style={{marginLeft:0, marginRight:0}}>
    
    {productos.map((prod)=>(
            <CardProducto key={prod.idProducto} verProducto={verProducto} producto={prod} />
        )) }
        
        </Row>
   </>
   )
    )
}




/*<Col md="3">
<div className="filtros">
<InputGroup className="mb-3">
        <FormControl
        placeholder="Buscar"
        aria-label="Username"
        aria-describedby="basic-addon1"
        />
</InputGroup>

</div>
</Col>
*/
