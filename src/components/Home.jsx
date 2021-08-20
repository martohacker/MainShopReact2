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
import Agregar from "../templates/componentesTemplates/ComponenteAgregar";





export default function Home(props){

  const [productos, setProductos] = useState([]);
  const [boton, setBoton] = useState(false);
  const handleLogout = props.handleLogout;

  function handleTemplate() {
    getProductos();
    setBoton(true);
    console.log("hola");
  } 

  function getProductos(){
    const state = store.getState();
    const id = state.id;
    console.log(id);
      axios.get("http://localhost:4000/ListadoProducto?id="+id).then((res) => {
          setProductos(res.data);
          console.log(res.data);
      }).catch((error) => {
        console.log(error)
      });
  }

   
      return(
          <>
        <Header boton={boton} setBoton={setBoton} handleLogout={handleLogout}/>
        {boton ? (
          //tiene plantilla=> switch plantillas con esto adentro
          <Template1 productos={productos}/>
          //no tiene plantilla=> vista de elegir plantilla
          
        ) : (
          <>
          <Row>
            <Col md="6">
          <Button style={{borderColor:'#343a40'}} className="MiEcommerce" onClick={()=>handleTemplate()}>Mi Ecommerce</Button>
          </Col>
          <Col md="6">
          <Button className="Botones" style={{backgroundColor: 'green', borderColor:'#343a40'}}>Mis ventas</Button>
          </Col>
          <Col md="6">
          <Button className="BotonMiCuenta" style={{backgroundColor:'yellowgreen', borderColor:'#343a40'}}>Mi Cuenta</Button>
          </Col>
          <Col md="6">
          <Button className="BotonMisEnvios" style={{backgroundColor:'grey', borderColor:'#343a40'}}>Mis Envios</Button>
          </Col>
          </Row>
          </>
        )}
        
        
       </>
      )
}

/*<Router>
          <div>
            <Link to="/Template"><Button >Mi Eccomerce</Button></Link>
          </div>
          <Switch>
            <Route path="/Template">
              <Template1 productos={productos}/>
            </Route>
          </Switch>
        </Router>
      */

