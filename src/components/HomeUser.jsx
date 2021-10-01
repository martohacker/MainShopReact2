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

export default function HomeUser(props){
    const {marcas} = props;
    {marcas.map((marca)=>(
        <p>{marca.name}</p>
    )) }
}