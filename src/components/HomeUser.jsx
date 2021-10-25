import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import db from "../firebase";
import {Button, Navbar, Nav, NavDropdown, Form, FormControl, Container, Row, Col, Image} from 'react-bootstrap';
import logo from '../images/Logo.png'
import "./Home.css";
import Header from "./Header";
import Template1User from "./Template1User";
import store from '../store/index';
import { render } from "@testing-library/react";
import "./HomeUser.css"
import CardProducto from "../templates/componentesTemplates/CardProducto";
import Carrito from "./Carrito";

export default function HomeUser(props){
    const {handleLogout, tipo}=props;
    const [marcas, setMarcas] = useState([]);
    const [marcaAVer, setMarcaAVer] = useState("");
    const [url, setUrl] = useState("");
    const [productos, setProductos] = useState([]);
    const [boton, setBoton] = useState(false);
    const [id, setId] = useState("");

    useEffect(() => {
        async function GiveMeBrands() {
            getId();
            await axios.get("http://localhost:8000/ListadoMarcas").then((res) => {
                console.log(res.data);
                console.log("entre al use effect")
                setMarcas(res.data);
                
            }).catch((error) => {
                console.log(error)
            });
        };        
        
        GiveMeBrands();
    }, [boton])

    function getId() {
        const state = store.getState();
        const id = state.id;
        setId(id);
      }

    useEffect(() => {
       cargarLogos(marcaAVer);
       getProductos(marcaAVer.id);
      }, [marcaAVer]);


      useEffect(() => {
        marcas.forEach((marca) => {
            if(marca.logo) {
                cargarLogos(marca);
                console.log("imagen");
            } else {
                console.log("no imagen");
            }
        })  
       }, [marcas]);
     
    
    function cargarLogos(marca){
        var storage = db.storage();
            storage.ref('images/'+marca.logo+".png").getDownloadURL().then(function(url){
                console.log("hola"+url);
                var img = document.getElementById(marca.name);
                img.src = url;
                setUrl(url);
              }).catch(function(error) {
                console.log(error);
              });
    }

    function getProductos(id){
        console.log(id);
          axios.get("https://mainshop-nodejs.herokuapp.com/ListadoProducto?id="+id).then((res) => {
              setProductos(res.data);
              console.log("productos: "+res.data);
          }).catch((error) => {
            console.log(error)
          });
      }

      function handleTemplate(marca){
          setMarcaAVer(marca);
          setBoton(true);
      }
    


    render();
    if(marcas) {
        return(
                <>
                <Header setBoton={setBoton} boton={boton} handleLogout={handleLogout}/>
                <Router>
                    <Switch>
                      <Route path="/Carrito">
                          <Carrito/>
                      </Route>
                      <Route path="/">
                        {marcaAVer && boton ?(
                        <Template1User url={url} productos={productos} tipo={marcaAVer.tipoCuenta} idMarca={marcaAVer.id} id={id} />
                            ):(
                                <>
                                <Row>
                                { marcas.map((marca)=>(
                                    <Col md={2}>
                                        <div onClick={()=>handleTemplate(marca)}>
                                        <Image className="logoHomeUser" id={marca.name} />
                                        </div>
                                    </Col>
                                )) }
                                </Row>
                                </>
                            )}
                      </Route>
                    </Switch>
                </Router>
                  
                
                </>
        )
    }
}