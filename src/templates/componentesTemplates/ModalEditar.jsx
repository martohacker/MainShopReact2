import React, { useEffect, useState } from "react";
import {Button, Navbar, Nav, NavDropdown, Form, FormControl, Container, Row, Col, Modal} from 'react-bootstrap';
import axios from "axios";
import store from '../../store/index';

export default function ModalAgregar(props) {
    const {producto} = props;
    const [show, setShow] = useState(false);
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [tipo, setTipo] = useState(""); 
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function getIdMarca() {
        const state = store.getState();
        const idMarca = state.id;
        console.log(idMarca);
        return idMarca;
      }

    function handleSubmit(){            
        const idMarca = getIdMarca();
        const params = new URLSearchParams();
            params.append('id', idMarca);
            params.append('nameProducto', nombre);
            params.append('categoriaProducto', 'ropa');
            params.append('precioProducto', precio);
            params.append('tipoDeProducto', tipo);
        console.log(nombre);
        console.log(tipo);
        const headers={
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        axios.put("http://localhost:8000/ModificarProducto?idProducto="+producto.idProducto, params, { headers }).then((res) => {
          console.log(res.data);
          handleClose();
      }).catch((error) => {
        console.log(error)
      });
    }
  
    return (
      <>
        <Button className="botonEditar"  style={{fontSize:'80%', backgroundColor: 'green', borderColor:'#343a40'}}  onClick={handleShow}>
          Editar
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header style={{backgroundColor:'#E4FFFF'}} closeButton>
            <Modal.Title>Editar Producto</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{backgroundColor:'#E4FFFF'}} >
              <Form>
                  
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                     Nombre
                  </Form.Label>
                     <Col sm="10">
                         <Form.Control style={{backgroundColor:'#2125294d'}} onChange={(event) => setNombre(event.target.value)} type="text" placeholder="Nombre" defaultValue={producto.nameProducto} />
                     </Col>
                     <Form.Label column sm="2">
                     Tipo
                  </Form.Label>
                     <Col sm="10">
                         <Form.Control style={{backgroundColor:'#2125294d'}} onChange={(event) => setTipo(event.target.value)} type="text" placeholder="Tipo" defaultValue={producto.tipoDeProducto} />
                     </Col>
                     <Form.Label column sm="2">
                     Precio
                  </Form.Label>
                     <Col sm="10">
                         <Form.Control style={{backgroundColor:'#2125294d'}} onChange={(event) => setPrecio(event.target.value)} type="text" placeholder="Precio" defaultValue={producto.precioProducto} />
                     </Col>
            </Form.Group>
</Form>
          </Modal.Body>
          <Modal.Footer style={{backgroundColor:'#E4FFFF'}}>
            <Button className="Cancelar" variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={()=>handleSubmit()}>
              Confirmar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
