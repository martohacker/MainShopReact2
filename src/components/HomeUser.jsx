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

export default function HomeUser(props){
    const {handleLogout}=props;
    const [marcas, setMarcas] = useState([]);
    const [marcaAVer, setMarcaAVer] = useState([]);

    useEffect(() => {
        async function GiveMeBrands() {
            await axios.get("http://localhost:8000/ListadoMarcas").then((res) => {
                console.log(res.data);
                setMarcas(res.data);
                marcas.map((marca) => {
                    cargarLogos(marca);
                })
            }).catch((error) => {
                console.log(error)
            });
        };
        GiveMeBrands()
    }, [])
    
    function cargarLogos(marca){
        var storage = db.storage();
            storage.child('images/'+marca.logo).getDownloadURL().then(function(url){
                var img = document.getElementById(marca.name);
                img.src = url;
                img.onclick=setMarcaAVer(marca.id);

              }).catch(function(error) {
                // Handle any errors
              });
    }


    render();
    if(marcas) {
        return(
                <>
                <Header handleLogout={handleLogout}/>
                { marcas.map((marca)=>(
                    <img id={marca.name} src={'images/'+marca.logo}/>
                )) }
                </>
        )
    }
}