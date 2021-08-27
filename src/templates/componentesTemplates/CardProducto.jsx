import { Card, Button } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import "../templates.css";
import remera from "./RemeraAzul.png";
import ComponenteAgregar from "./ComponenteAgregar";
import ComponenteEliminar from "./ComponenteEliminar";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ModalAgregar from "./ModalAgregar";

export default function CardProducto(props){
    const {producto} = props;
    return (
         <Col md="1">
             <Card className="cardProducto" style={{ width: '90%' }}>
                    <Card.Img variant="top" src={remera} style= {{width: '100%'}} />
                         <Card.Body>
                            <Card.Title>{producto.nameProducto}</Card.Title>
                            <Card.Text className="precio">${producto.precioProducto} </Card.Text>
                </Card.Body>
                <BrowserRouter>
                <ModalAgregar id={producto.idProducto}/>
                </BrowserRouter>
                <Button onClick="eliminarProducto()" className="botonEliminar" style={{fontSize:'80%', backgroundColor: 'red', borderColor:'#343a40'}}>Eliminar</Button>
             </Card>
        </Col>
    )
}
