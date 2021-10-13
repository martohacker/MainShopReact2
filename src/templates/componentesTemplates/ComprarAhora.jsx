import React, { useEffect, useState } from "react";
import {Button, Navbar, Nav, NavDropdown, Form, FormControl, Container, Row, Col, Modal} from 'react-bootstrap';
import axios from "axios";
import store from '../../store/index';
import "../templates.css";

export default function AgregarCarrito(){
    return(
        <Button className="ComprarAhora" style={{fontSize:'74%'}}>Comprar ahora</Button>
    )
}