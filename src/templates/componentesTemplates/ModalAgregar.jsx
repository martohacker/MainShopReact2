import React, { useEffect, useState } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Button, Navbar, Nav, NavDropdown, Form, FormControl, Container, Row, Col, Modal} from 'react-bootstrap';
import axios from "axios";
import store from '../../store/index';

export default function ModalAgregar(props) {
    const {id} = props;
    const [show, setShow] = useState(false);
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [tipo, setTipo] = useState(""); 
    const [categoria, setCategoria] = useState(""); 
    
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
            params.append('tipoProducto', tipo);
            params.append('idProducto', id);
        console.log(id);
        console.log(nombre);
        console.log(tipo);
        const headers={
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        axios.put("https://mainshop-nodejs.herokuapp.com/ModificarProducto", params, { headers }).then((res) => {
          console.log(res.data);
      }).catch((error) => {
        console.log(error)
      });
    }
  
    return (
      <>
        <Button className="botonAgregar"  style={{fontSize:'80%', backgroundColor: 'green', borderColor:'#343a40'}}  onClick={handleShow}>
          Agregar Producto
        </Button>
  
       <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
         <Offcanvas.Title>Agregar Producto</Offcanvas.Title>
         </Offcanvas.Header>
           <Offcanvas.Body>
                <Form>
                  
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                       <Form.Label column sm="2">
                           Nombre
                       </Form.Label>
                          <Col sm="10">
                              <Form.Control onChange={(event) => setNombre(event.target.value)} type="text" placeholder="Nombre" />
                          </Col>
                       <Form.Label column sm="2">
                             Tipo
                       </Form.Label>
                           <Col sm="10">
                              <Form.Control onChange={(event) => setTipo(event.target.value)} type="text" placeholder="Tipo" />
                           </Col>
                       <Form.Label column sm="2">
                             Precio
                        </Form.Label>
                            <Col sm="10">
                              <Form.Control onChange={(event) => setPrecio(event.target.value)} type="text" placeholder="Precio" />
                           </Col>
                      </Form.Group>
               </Form>
            </Offcanvas.Body>
        </Offcanvas>
</>
    );
  }


