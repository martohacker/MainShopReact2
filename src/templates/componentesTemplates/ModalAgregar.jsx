import React, { useEffect, useState } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Button, Navbar, Nav, NavDropdown, Form, FormControl, Container, Row, Col, Modal} from 'react-bootstrap';
import axios from "axios";
import store from '../../store/index';
import db from "../../firebase";
import "../templates.css"

export default function ModalAgregar() {
    const [show, setShow] = useState(false);
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [tipo, setTipo] = useState(""); 
    const [categoria, setCategoria] = useState(""); 
    const allInputs = {imgUrl: ''}
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState(allInputs);
    const [imagen, setImagen] = useState("");
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleImageAsFile = (e) => {
      const image = e.target.files[0]
      setImageAsFile(imageFile => (image))
  }

  const subirImagen = () =>{
    var storage = db.storage();
    const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile);
    console.log(imageAsFile.name);
    setImagen(imageAsFile.name);
  }

    function getIdMarca() {
        const state = store.getState();
        const idMarca = state.id;
        console.log(idMarca);
        return idMarca;
      }

    function handleSubmit(){            
        const idMarca = getIdMarca();
        subirImagen();
        const params = new URLSearchParams();
        params.append('id', idMarca);
        params.append('nameProducto', nombre);
        params.append('categoriaProducto', 'ropa');
        params.append('precioProducto', precio);
        params.append('tipoDeProducto', tipo);
        params.append('idProducto', 'KSDFKkdsakffks34');
        params.append('imagen', imagen);


        console.log(imagen);
        console.log(params);
        console.log(nombre);
        console.log(tipo);
        const headers= {
            'Content-Type' : 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Allow-Origin':'*'
        }
        axios.post("http://localhost:8000/AgregarProducto", params).then((res) => {
          console.log(res.data);
      }).catch((error) => {
        console.log(error)
      });
      handleClose();
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
                                    <FormControl
                                        className="File"
                                        type = "file"
                                        name="imagen"
                                        required
                                        onChange={handleImageAsFile}
                                        accept="image/png"
                                    />
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





