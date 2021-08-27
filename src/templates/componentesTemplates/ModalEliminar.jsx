import React, { useEffect, useState } from "react";
import {Button, Navbar, Nav, NavDropdown, Form, FormControl, Container, Row, Col, Modal} from 'react-bootstrap';
import axios from "axios";
import store from '../../store/index';




export default function ModalEliminar(props){

    const {idProducto} = props;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    function getIdMarca() {
        const state = store.getState();
        const idMarca = state.id;
        console.log(idMarca);
        return idMarca;
      }

    function handleEliminar(){
        const idMarca = getIdMarca();
        const headers={
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        const params= new URLSearchParams();
        params.append('id', idMarca);
        params.append('idProducto', idProducto);
        axios.delete("https://mainshop-nodejs.herokuapp.com/BorrarProducto", params, { headers }).then((res) => {
            console.log(res.data);
        }).catch((error) => {
          console.log(error)
        });
    }

    return (
        <>
          <Button  className="botonEliminar" style={{fontSize:'80%', backgroundColor: 'red', borderColor:'#343a40'}}  onClick={handleShow}>
            Eliminar
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>¿Está seguro?</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
              <Button variant="primary" onClick={handleClose, ()=>handleEliminar()}>
               Confirmar
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
