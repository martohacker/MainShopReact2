import { Card, Button } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import "../templates.css";
import remera from "./RemeraAzul.png";

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
                <Button className="botonEditar"  style={{fontSize:'80%', backgroundColor: 'green', borderColor:'#343a40'}}>Editar</Button>
                <Button className="botonEliminar" style={{fontSize:'80%', backgroundColor: 'red', borderColor:'#343a40'}}>Eliminar</Button>
             </Card>
        </Col>

    )
}

