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
import { render } from "@testing-library/react";
import HomeUser from "./components/HomeUser";




export default function App() {

 
  const [token, setToken] = useState("");
  const [id, setId] = useState("");
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
  const [tipoUsuario, setTipoUsuario] = useState("");
  const [marcas, setMarcas] = useState("");

  const allInputs = {imgUrl: ''}
  const [imageAsFile, setImageAsFile] = useState('')
  const [imageAsUrl, setImageAsUrl] = useState(allInputs)


  const clearInputs = () => {
    setEmail("");
    setPassword("");
  }

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
    setRespuestaEnPantalla("");
  }

  const handleImageAsFile = (e) => {
    const image = e.target.files[0]
    setImageAsFile(imageFile => (image))
}

  const subirLogo = () =>{
    var storage = db.storage();
    const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
  }

  function handleSignUp(event) {
    clearErrors();
    event.preventDefault();
    if(tipoUsuario=="Usuario"){
      traerMarcas();
    }
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


  function createUser(id){

    const params = new URLSearchParams();
    if(tipoUsuario=="Marca"){
        params.append('id', id);
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
        params.append('tipoDeCuenta', tipoUsuario);

    } else{
        params.append('id', id);
        params.append('name', name);
        params.append('password', password);
        params.append('email', email);
        params.append('tipoDeCuenta', tipoUsuario);
    }
    


    axios.post("http://localhost:8000/UsuarioRegistro", params).then((res) => {
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
      .then((credential) => {
        setId(credential.user.uid);
      })
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

  function traerMarcas() {
    axios.get("http://localhost:8000/ListadoMarcas").then((res) => {
    console.log(res);
    setMarcas(res);
    }).catch((error) => {
      console.log(error)
    });
  }

  async function traerTipo(id){
    try{
      const res =  await axios.get("http://localhost:8000/TraerTipo?id="+id);
      console.log(res.data);
      if(res.data=="Usuario"){
        console.log("hola");
        setTipoUsuario("Usuario");
      }
      console.log(tipoUsuario);
    }catch(error){
      console.log(error);
    };   
  }

  const authListener = () => {
    console.log("listener");
    db
      .auth()
      .onAuthStateChanged(user => {
      traerTipo(id);
            if(tipoUsuario=="Usuario"){
              traerMarcas();
            }
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
       case "tipoUsuario":
            setTipoUsuario(event.target.value);
            break;
    }
  };


  function getToken() {
    const state = store.getState();
    const token = state.token;
    setToken(token);
  }


  render();
    if(token != ""){
      return(
        <Container className="mainBackground" fluid="l">
        {tipoUsuario=="Marca"? (
          <Home handleLogout={handleLogout}/>
        ):(
          <HomeUser marcas={marcas}/>
          )}
          </Container>
        );
      }
      else{
        return(
          <Container className="mainBackground" fluid="l">
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
                setEmail={setEmail}
                setPassword={setPassword}
                handleLogin={handleLogin}
                handleSignUp={handleSignUp}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError}
                passwordError={passwordError}
                tipoUsuario={tipoUsuario}
                handleChange={handleChange}
                handleImageAsFile={handleImageAsFile}
                respuesta={respuestaEnPantalla} />
            </Col>
          </Row>
        </div>
        </Container>
        );
      }
  }
