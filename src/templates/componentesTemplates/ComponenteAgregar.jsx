import React, { useContext,  AccordionContext} from "react";
import { Button, InputGroup, FormControl,Container,Col,Row, Form } from "react-bootstrap";





export default function ComponenteAgregar() {
    return(
        <>
            <Form.Select aria-label="Default select example" >
                <option>Categoria</option>
                 <option value="ropa">Ropa</option>
                 <option value="tecnologia">Tecnologia</option>
            </Form.Select>
        </>
    )
}
