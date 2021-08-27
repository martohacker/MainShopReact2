import React, { useState, useEffect } from "react";
import {} from "module";
import "./App.css";
import axios from "axios";
import db from "./firebase";
import LoginComponent from './components/LoginComponent';
import Home from "./components/Home";
import imagenLogin from './images/ImagenLogin.svg'
import { Container, Row,Col } from "react-bootstrap";
import logo from './images/Logo.png';
import store from './store/index';
import "./App.css"
import {getState} from "react-redux";




export default function App() {

 
  const [token, setToken] = useState("");
  const [hasAccount, setHasAccount] = useState(true);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("")
  const [categoria, setCategoria] = useState("");
  const [cuit, setCuit] = useState("");
  const [razonSocial, setRazonSocial] = useState("");
  const [condicionFrenteAlIva, setCondicionFrenteAlIva] = useState("");
  const [numeroIngresosBrutos, setNumeroIngresosBrutos] = useState("");
  const [suscripcion, setSuscripcion] = useState("");
  const [idPlantilla, setIdPlantilla] = useState("sadasdfgege3432");
  const [respuestaEnPantalla, setRespuestaEnPantalla] = useState("");
  const [logoEmpresa, setLogoEmpresa] = useState("");




  const clearInputs = () => {
    setEmail("");
    setPassword("");
  }

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
    setRespuestaEnPantalla("");
  }

  const subirLogo = () =>{
    var storage = db.storage();
    const Newref = storage.ref('images').child(logo);
    Newref.put(logo).then(function(snapshot) {
      console.log(snapshot);
    })
    
  }

  function handleSignUp(event) {
    clearErrors();
    event.preventDefault();
    subirLogo();

    db.auth().createUserWithEmailAndPassword(email, password).then((credential) => {
      createUser(credential.user.uid);
    }).catch((error) => {
      switch (error.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(error.message)
          break;
        case "auth/weak-password":
          setPasswordError(error.message);
          break;
      }
    })
  
    
  }


  function createUser(idMarca){
    const params = new URLSearchParams();
    params.append('id', idMarca);
    params.append('name', name);
    params.append('password', password);
    params.append('email', email);
    params.append('categoria', categoria);
    params.append('cuit', cuit);
    params.append('razonSocial', razonSocial);
    params.append('condicionFrenteAlIva', condicionFrenteAlIva);
    params.append('numeroIngresosBrutos', numeroIngresosBrutos);
    params.append('suscripcion', suscripcion);
    params.append('idPlantilla', idPlantilla);



    axios.post("https://mainshop-nodejs.herokuapp.com/MarcaRegistro", params).then((res) => {
      console.log(res.data);
      const respuesta = res.data;
      if(respuesta) {
        console.log("entre")
        
      }
      else{
        setRespuestaEnPantalla("Ya existe esta marca, por favor cambie el nombre");
      }
    }).catch((error) => {
      console.log(error)
    });
  }

  function handleLogin() {
    console.log("entre");
    clearErrors();
    db
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        switch (error.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(error.message)
            break;
          case "auth/wrong-password":
            setPasswordError(error.message);
            break;
        }
      })
  }


  function handleLogout() {
    db.auth().signOut();
    console.log("logout" + token);
    store.dispatch({type:'logout'});
    getToken();
    //dispatch store
  }

  const authListener = () => {
    console.log("listener");
    db
      .auth()
      .onAuthStateChanged(user => {
        console.log(user);
        if (user) {
          clearInputs();
          console.log(user);
          const userInfo = {
            token : user.refreshToken,
            email : user.email,
            id : user.uid
          }
          store.dispatch(({type : 'login', userInfo}));
          getToken();
          //dispatch store
        }
      })
  }

  useEffect(() => {
    authListener();
  }, []);



  const handleChange = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;

      case "password":
        setPassword(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "categoria":
        setCategoria(event.target.value);
        break;
      case "cuit":
        setCuit(event.target.value);
        break;
      case "razonSocial":
        setRazonSocial(event.target.value);
        break;
      case "condicionFrenteAlIva":
        setCondicionFrenteAlIva(event.target.value);
        break;
      case "numeroIngresosBrutos":
        setNumeroIngresosBrutos(event.target.value);
        break;
      case "suscripcion":
        setSuscripcion(event.target.value);
        break;
        case "logoEmpresa":
          setLogoEmpresa(event.target.value);
          break;
    }
  };


  function getToken() {
    const state = store.getState();
    const token = state.token;
    setToken(token);
  }


  return (
      <Container className="mainBackground" fluid="l">


      
      {token != "" ? (
        <Home handleLogout={handleLogout}/>
      ) : (
        <div className="App-header">
          <div>
            <img className="logoApp" src={logo}></img>
          </div>
          <Row>
            <Col md="6">
              <div className="imagen-container">
                <img className="imagenLogin" src={imagenLogin}></img>
              </div>
            </Col>
            <Col md="4">
              <LoginComponent
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleLogin={handleLogin}
                handleSignUp={handleSignUp}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError}
                passwordError={passwordError}
                handleChange={handleChange}
                respuesta={respuestaEnPantalla} />
            </Col>
          </Row>
        </div>
      )
    }
 
      </Container>

    
  );


  }