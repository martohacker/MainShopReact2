import React from "react";
import { Button, InputGroup, FormControl,Container,Col,Row, Form } from "react-bootstrap";

export default function SeleccionarUsuario(props){
    const {handleChange, setHasAccount, hasAccount} = props;
    return (
        <>
                              <div className="registro">
                                  <Row>
                                  <InputGroup className="mb-3">
                              <Form.Select name="tipoUsuario" required onChange={handleChange} aria-label="Default select example">
                                  <option value="">Seleccione el tipo de cuenta</option>
                                  <option value="Usuario">Usuario</option>
                                  <option value="Marca">Marca</option>
                              </Form.Select>
                              </InputGroup>
                              <p className="inicia">Tenes una cuenta? <span onClick={() => setHasAccount(!hasAccount)}>Inicia sesion</span></p>    
                                </Row>
                                </div>
                                
                            )
                            </>
    )
} 