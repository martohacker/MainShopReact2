import React, { useEffect, useState } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Button, Navbar, Nav, NavDropdown, Form, FormControl, Container, Row, Col, Modal, InputGroup} from 'react-bootstrap';

export default function SubirTalles(){

    const [xxs, setXxs] = useState(false);
    const [xs, setXs] = useState(false);
    const [s, setS] = useState(false);
    const [m, setM] = useState(false);
    const [l, setL] = useState(false);
    const [xl, setXl] = useState(false);
    const [xxl, setXxl] = useState(false);
    


    const handleChange = (event) => {
        switch (event.target.name) {
          case "xxs":
            setXxs(event.target.value);
            break;
        case "xs":
                setXs(event.target.value);
                break;
        case "s":
                    setS(event.target.value);
                    break;
        case "m":
                    setM(event.target.value);
                        break;
        case "l":
                    setL(event.target.value);
                        break;
        case "xl":
                    setXl(event.target.value);
                                break;
        case "xxl":
                    setXxl(event.target.value);
                                                break;
            
          
        }
      };

    return (
        <Form>
            <Form.Check 
          type="switch"
          id="custom-switch"
          label="xxs"
          onClick={handleChange}
          name="xxs"
        />
        {xxs?(
            <InputGroup name="cantXxs" placeholder="cantidad de xxs"/>
        ):(<h1></h1>)}
        <Form.Check 
          type="switch"
          id="custom-switch"
          label="xs"
          onClick={handleChange}
          name="xs"
        />
        <Form.Check 
          disabled
          type="switch"
          label="s"
          id="disabled-custom-switch"
          name="s"
        />
        <Form.Check 
          disabled
          type="switch"
          label="m"
          id="disabled-custom-switch"
          name="m"
        />
        <Form.Check 
          disabled
          type="switch"
          label="l"
          id="disabled-custom-switch"
          name="l"
        />
        <Form.Check 
          disabled
          type="switch"
          label="xl"
          id="disabled-custom-switch"
          name="xl"
        />
        <Form.Check 
          disabled
          type="switch"
          label="xxl"
          id="disabled-custom-switch"
          name="xxl"
        />
      </Form>
    )
   
}