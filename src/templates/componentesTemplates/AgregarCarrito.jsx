import React, { useEffect, useState } from "react";
import {Button, Navbar, Nav, NavDropdown, Form, FormControl, Container, Row, Col, Modal} from 'react-bootstrap';
import axios from "axios";
import store from '../../store/index';
import "../templates.css";

export default function AgregarCarrito(){
    return(
        <Button style={{backgroundColor:'#E3EFF4', color:'#22B8FA', fontSize:'70%'}} className="AgregarCarrito">Agregar al carrito</Button>
    )
}