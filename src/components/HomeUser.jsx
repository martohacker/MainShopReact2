import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import db from "../firebase";
import {Button, Navbar, Nav, NavDropdown, Form, FormControl, Container, Row, Col} from 'react-bootstrap';
import logo from '../images/Logo.png'
import "./Home.css";
import Header from "./Header";
import Template1 from "../templates/Template1"
import store from '../store/index';
import { render } from "@testing-library/react";

export default function HomeUser(){
    const [marcas, setMarcas] = useState([]);
    useEffect(() => {
        async function GiveMeBrands() {
            await axios.get("http://localhost:8000/ListadoMarcas").then((res) => {
                console.log(res.data);
                setMarcas(res.data);
            }).catch((error) => {
                console.log(error)
            });
        };
        GiveMeBrands()
    }, [])
    

    render();
    if(marcas) {
        return(
            <Container className="mainBackground" fluid="l">
                { marcas.map((marca)=>(
                    <p>{marca.name}</p>
                )) }
            </Container>
        )
    }
}