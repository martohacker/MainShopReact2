import React from "react";
import { Button, InputGroup, FormControl,Container,Col,Row, Form } from "react-bootstrap";

export default function FormUsuario(props){
    const {handleSignUp, handleChange, setHasAccount, hasAccount, respuesta, passwordError, emailError} = props;
        return (
            <>
                                    <form onSubmit={handleSignUp}>
                                    <Container fluid="md">
                                    <div className="registro">
                                        <Row>
                                        <InputGroup className="mb-3">
                                  <Form.Select name="tipoUsuario" required onChange={handleChange} aria-label="Default select example">
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
                                            required
                                        />
                                      </InputGroup>
                                      <InputGroup className="mb-3">
                                        <FormControl
                                            type = "email"
                                            name="email"
                                            onChange={handleChange}
                                            placeholder="Ingrese su email"
                                        />
                                      <p className="errorMsg">{emailError}</p>
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

        )

}