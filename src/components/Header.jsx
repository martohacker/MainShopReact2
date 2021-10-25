import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import db from "../firebase";
import {Button, Navbar, Nav, NavDropdown, Form, FormControl, Container, Row} from 'react-bootstrap';
import logo from '../images/Logo.png';
import HomeUser from "./HomeUser";
import Carrito from "./Carrito";



export default function Header(props){

  const {handleLogout, boton, setBoton} = props;
   
      return(
        
        <Navbar className="sticky-nav" bg="dark">
            <Navbar.Brand href="#home"  onClick={()=>setBoton(false)}>
                <div className="logoHome">
                    <img className="logoHome" src={logo}/>
                </div>
            </Navbar.Brand>
            <Router>
                <div>
                    <ul>
                        <li>
                          <Link to ="/Carrito">Mi carrito</Link>
                        </li>
                    </ul>
                </div>
            </Router>
             <Button className="logout" onClick={handleLogout}>Logout</Button>
        </Navbar>
      )
}