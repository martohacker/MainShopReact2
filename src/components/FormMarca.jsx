import React from "react";
import { Button, InputGroup, FormControl,Container,Col,Row, Form } from "react-bootstrap";

export default function FormMarca(props){
    const {handleSignUp, handleChange, handleImageAsFile, setHasAccount, hasAccount, respuesta, passwordError, emailError} = props;
    return(
        <>
                                
                                <form onSubmit={handleSignUp}>
                                <Container fluid="md">
                                <div className="registro">
                                    <Row>
                                    <InputGroup className="mb-3">
                              <Form.Select name="tipoUsuario" required onChange={handleChange} aria-label="Default select example">
                                  <option value="Marca">Marca</option>
                                  <option value="Usuario">Usuario</option>
                              </Form.Select>
                              </InputGroup>

                                    <InputGroup className="mb-3">
                                    <FormControl
                                        className="File"
                                        type = "file"
                                        name="logoEmpresa"
                                        required
                                        onChange={handleImageAsFile}
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
    )
}