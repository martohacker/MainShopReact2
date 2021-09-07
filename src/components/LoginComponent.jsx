import React from "react";
import { Button, InputGroup, FormControl,Container,Col,Row, Form } from "react-bootstrap";
import "./LoginComponent.css"
import "./Home.css"
import logo from '../images/Logo.png';
import { render } from "@testing-library/react";
import SeleccionarUsuario from "./SeleccionarUsuario";
import FormMarca from "./FormMarca";
import FormUsuario from "./FormUsuario";
import FormLogin from "./FormLogin";

const loginComponent = (props) => {
   const {setEmail, setPassword, handleLogin, handleSignUp, hasAccount, setHasAccount, emailError, passwordError, handleChange, handleImageAsFile, respuesta, tipoUsuario} = props;
   render();
        if (hasAccount){
          return(
                <FormLogin
                  setEmail={setEmail}
                  setPassword={setPassword}
                  handleLogin={handleLogin}
                  hasAccount={hasAccount}
                  setHasAccount={setHasAccount}
                  emailError={emailError}
                  passwordError={passwordError}
                />
          );
                     } else if (tipoUsuario==""){
                          return (
                                  <SeleccionarUsuario handleChange={handleChange} setHasAccount={setHasAccount} hasAccount={hasAccount}/>
                                  );
                              }else if(tipoUsuario=="Marca"){
                                return(
                                      <FormMarca 
                                          handleSignUp={handleSignUp} 
                                          handleChange={handleChange} 
                                          handleImageAsFile={handleImageAsFile} 
                                          setHasAccount={setHasAccount} 
                                          hasAccount={hasAccount} 
                                          respuesta={respuesta} 
                                          passwordError={passwordError} 
                                          emailError={emailError} 
                                      />
                                  );
                                                          } else if(tipoUsuario=="Usuario"){
                                                              return(
                                                                    <FormUsuario
                                                                    handleSignUp={handleSignUp} 
                                                                    handleChange={handleChange} 
                                                                    setHasAccount={setHasAccount} 
                                                                    hasAccount={hasAccount} 
                                                                    respuesta={respuesta} 
                                                                    passwordError={passwordError} 
                                                                    emailError={emailError} 
                                                                    />
                                                                  );
                                                        }
   }
  
export default loginComponent;


/*<form onSubmit={handleLogin()}>
<h5>Coreo electronico</h5>
<InputGroup className="mb-3">
<FormControl
  type = "email"
  name="email"
  onChange={handleChange}
  placeholder="email"
  aria-label="email"
  aria-describedby="basic-addon1"
/>
</InputGroup>

<h5>Contraseña</h5>
<InputGroup className="mb-3">
<FormControl
  type = "password"
  name="password"
  onChange={handleChange}
  placeholder="password"
  aria-label="password"
  aria-describedby="basic-addon1"
/>
</InputGroup>
  <Button>Iniciar sesión</Button>
  </form>*/
