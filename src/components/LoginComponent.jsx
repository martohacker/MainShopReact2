import React from "react";
import { Button, InputGroup, FormControl,Container,Col,Row, Form } from "react-bootstrap";
import "./LoginComponent.css"
import "./Home.css"
import logo from '../images/Logo.png';
import { render } from "@testing-library/react";

const loginComponent = (props) => {
   const {email, setEmail, password, setPassword, handleLogin, handleSignUp, hasAccount, setHasAccount, emailError, passwordError, handleChange, respuesta, tipoUsuario} = props;
   render();
   if (hasAccount){
     return(
    <>
        <div className="login">
            <div className="loginContainer">
                <input
                    type="text"
                    placeholder="Username"
                    autoFocus
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                 />
                 <p className="errorMsg">{emailError}</p>
                 <input
                 placeholder="Password"
                 type="password"
                 required
                 value={password}
                 onChange={(event) => setPassword(event.target.value)}
                 />
                 <p className="errorMsg">{passwordError}</p>
                 <div className="btnContainer" >
                     
                         
                         <Button onClick={handleLogin}>Iniciar Sesion</Button>
                       <p className="PLogin">No tenes una cuenta? <span onClick={() => setHasAccount(!hasAccount)}>Registrate</span></p>
                       </div>
            </div>
            </div>
                </>
     );
   } else if (tipoUsuario==""){
     return (
    <>
                              <div className="registro">
                                  <Row>
                                  <InputGroup className="mb-3">
                              <Form.Select name="tipoUsuario" required onChange={handleChange} aria-label="Default select example">
                                  <option value="">Seleccione el tipo de usuario</option>
                                  <option value="Usuario">Usuario</option>
                                  <option value="Marca">Marca</option>
                              </Form.Select>
                              </InputGroup>
                              <p className="inicia">Tenes una cuenta? <span onClick={() => setHasAccount(!hasAccount)}>Inicia sesion</span></p>    
                                </Row>
                                </div>
                                
                            )
                            </>
                            );
                         }else if(tipoUsuario=="Marca"){
                           return(
                                <>
                                
                                <form onSubmit={handleSignUp}>
                                <Container fluid="md">
                                <div className="registro">
                                    <Row>
                                    <InputGroup className="mb-3">
                              <Form.Select name="tipoUsuario" required onChange={handleChange} aria-label="Default select example">
                                  <option value="">Seleccione el tipo de usuario</option>
                                  <option value="Usuario">Usuario</option>
                                  <option value="Marca">Marca</option>
                              </Form.Select>
                              </InputGroup>

                                    <InputGroup className="mb-3">
                                    <FormControl
                                        className="File"
                                        type = "file"
                                        name="logoEmpresa"
                                        required
                                        onChange={handleChange}
                                        accept="image/png, image/jpeg, image/svg"
                                    />
                                  </InputGroup>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        type = "text"
                                        name="name"
                                        onChange={handleChange}
                                        placeholder="Ingrese su nombre"
                                    />
                                  </InputGroup>
                            
                                  <InputGroup className="mb-3">
                                    <FormControl
                                        type = "password"
                                        name="password"
                                        onChange={handleChange}
                                        placeholder="Ingrese su contraseña"
                                    />
                                    <p className="errorMsg">{passwordError}</p>
                                  </InputGroup>
                            
                                  <InputGroup className="mb-3">
                                    <FormControl
                                        type = "email"
                                        name="email"
                                        onChange={handleChange}
                                        placeholder="Ingrese su email"
                                    />
                                  </InputGroup>
                                  <p className="errorMsg">{emailError}</p>
                                
                                        
                                  <InputGroup className="mb-3">
                                    <FormControl
                                        type = "text"
                                        name="categoria"
                                        onChange={handleChange}
                                        placeholder="Ingrese su categoria"
                                    />
                                  </InputGroup>
                                        
                                  <InputGroup className="mb-3">
                                    <FormControl
                                        type = "text"
                                        name="cuit"
                                        onChange={handleChange}
                                        placeholder="Ingrese su cuit"
                                    />
                                  </InputGroup>
                                        
                                  <InputGroup className="mb-3">
                                    <FormControl
                                        type = "text"
                                        name="razonSocial"
                                        onChange={handleChange}
                                        placeholder="Ingrese su razon social"
                                    />
                                  </InputGroup>
                                        
                                  <InputGroup className="mb-3">
                                    <FormControl
                                        type = "text"
                                        name="condicionFrenteAlIva"
                                        onChange={handleChange}
                                        placeholder="Ingrese su condicion frente al iva"
                                    />
                                  </InputGroup>
                            
                                  <InputGroup className="mb-3">
                                    <FormControl
                                        type = "number"
                                        name="numeroIngresosBrutos"
                                        onChange={handleChange}
                                        placeholder="Ingrese su numero de ingresos brutos"
                                    />
                                  </InputGroup>
                                        
                                  <InputGroup className="mb-3">
                                    <FormControl
                                        type = "text"
                                        name="suscripcion"
                                        onChange={handleChange}
                                        placeholder="Ingrese su suscripcion"
                                    />
                                  </InputGroup>
                                      
                                <Button type="submit" variant="primary">
                                Registrarse
                              </Button>
                              <h3>{respuesta}</h3>
                              <p className="inicia">Tenes una cuenta? <span onClick={() => setHasAccount(!hasAccount)}>Inicia sesion</span></p>  
                              </Row>
                              </div>
                              </Container>
                              
                            </form>
                            </>
                            );
                         } else if(tipoUsuario=="Usuario"){
                              return(
                                    <>
                                    <form onSubmit={handleSignUp}>
                                    <Container fluid="md">
                                    <div className="registro">
                                        <Row>
                                        <InputGroup className="mb-3">
                                  <Form.Select name="tipoUsuario" required onChange={handleChange} aria-label="Default select example">
                                      <option value="">Seleccione el tipo de usuario</option>
                                      <option value="Usuario">Usuario</option>
                                      <option value="Marca">Marca</option>
                                  </Form.Select>
                                  </InputGroup>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            type = "text"
                                            name="name"
                                            onChange={handleChange}
                                            placeholder="Ingrese su nombre"
                                        />
                                      </InputGroup>
                                
                                      <InputGroup className="mb-3">
                                        <FormControl
                                            type = "password"
                                            name="password"
                                            onChange={handleChange}
                                            placeholder="Ingrese su contraseña"
                                        />
                                        <p className="errorMsg">{passwordError}</p>
                                      </InputGroup>
                                
                                      <InputGroup className="mb-3">
                                        <FormControl
                                            type = "email"
                                            name="email"
                                            onChange={handleChange}
                                            placeholder="Ingrese su email"
                                        />
                                      </InputGroup>
                                      <p className="errorMsg">{emailError}</p>
                                        
                                    <Button type="submit" variant="primary">
                                    Registrarse
                                  </Button>
                                  <h3>{respuesta}</h3>
                                  <p className="inicia">Tenes una cuenta? <span onClick={() => setHasAccount(!hasAccount)}>Inicia sesion</span></p>  
                                  </Row>
                                  </div>
                                  </Container>
                                  </form>
                                  )
                                  </>
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
