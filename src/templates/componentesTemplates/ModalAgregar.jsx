import React, { useEffect, useState } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Button, Navbar, Nav, NavDropdown, Form, FormControl, Container, Row, Col, Modal} from 'react-bootstrap';
import axios from "axios";
import store from '../../store/index';

export default function ModalAgregar() {
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
        const params = JSON.stringify(
          {id:idMarca, 
          nameProducto: nombre,
          categoriaProducto: 'ropa',
          precioProducto: precio,
          tipoProducto: tipo
        })
        const mode= {
          mode : 'cors'
        }
        console.log(params);
        console.log(nombre);
        console.log(tipo);
        const headers= {
            'Content-Type' : 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Request-Headers': 'Content-Type'
        }
        axios.post("https://mainshop-nodejs.herokuapp.com/AgregarProducto", params, {headers}).then((res) => {
          console.log(res.data);
      }).catch((error) => {
        console.log(error)
      });
    }
  
    return (
      <>
        <Button style={{fontSize:'80%', backgroundColor: '#0d6efd', borderColor:'#343a40', position:"relative", left:'6%', bottom:'10%'}}  onClick={handleShow}>
          Agregar Producto
        </Button>
  
       <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header style={{backgroundColor:'#E4FFFF'}} closeButton>

         <Offcanvas.Title>Agregar Producto</Offcanvas.Title>
         </Offcanvas.Header>
           <Offcanvas.Body style={{backgroundColor:'#E4FFFF'}}>
                <Form>
                  
                    <Form.Group  as={Row} className="mb-3" controlId="formPlaintextPassword">
                       <Form.Label column sm="2">
                           Nombre
                       </Form.Label>
                          <Col sm="10">
                              <Form.Control style={{backgroundColor:'#2125294d'}} onChange={(event) => setNombre(event.target.value)} type="text" placeholder="Nombre" />
                          </Col>
                       <Form.Label column sm="2">
                             Tipo
                       </Form.Label>
                           <Col sm="10">
                              <Form.Control style={{backgroundColor:'#2125294d'}} onChange={(event) => setTipo(event.target.value)} type="text" placeholder="Tipo" />
                           </Col>
                       <Form.Label column sm="2">
                             Precio
                        </Form.Label>
                            <Col sm="10">
                              <Form.Control style={{backgroundColor:'#2125294d'}} onChange={(event) => setPrecio(event.target.value)} type="text" placeholder="Precio" />
                           </Col>
                      </Form.Group>
               </Form>
               <Button className="Cancelar" variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button style={{marginTop:'1%'}} variant="primary" onClick={()=>handleSubmit()}>
              Confirmar
            </Button>
            </Offcanvas.Body>
        </Offcanvas>
</>
    );
  }





