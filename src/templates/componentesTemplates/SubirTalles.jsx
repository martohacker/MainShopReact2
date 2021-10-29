import React, { useEffect, useState } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Button, Navbar, Nav, NavDropdown, Form, FormControl, Container, Row, Col, Modal, InputGroup} from 'react-bootstrap';
import "../templates.css";


export default function SubirTalles(props){
  const {talles, setTalles, xxs, setXxs, xs, setXs, s, setS, m, setM, l, setL, xl, setXl, xxl, setXxl,
  cantXxs,cantXs,cantS,cantM,cantL,cantXl,cantXxl,setCantXxs,setCantXs,setCantS,setCantM,setCantL,setCantXl,setCantXxl} = props;

    
    
    

    const handleValue = (event) => {
      switch (event.target.name) {
        case "cantXxs":
          setCantXxs(event.target.value);
          console.log(event)
          break;
      case "cantXs":
              setCantXs(event.target.value);
              break;
      case "cantS":
                  setCantS(event.target.value)
                  break;
      case "cantM":
                  setCantM(event.target.value)
                      break;
      case "cantL":
                  setCantL(event.target.value)
                      break;
      case "cantXl":
                  setCantXl(event.target.value);
                              break;
      case "cantXxl":
                  setCantXxl(event.target.value);
                                              break;
          
        
      }
    }

    const handleChange = (event) => {
        switch (event.target.name) {
          case "xxs":
            setXxs(!xxs);
            break;
        case "xs":
                setXs(!xs);
                break;
        case "s":
                    setS(!s);
                    break;
        case "m":
                    setM(!m);
                        break;
        case "l":
                    setL(!l);
                        break;
        case "xl":
                    setXl(!xl);
                                break;
        case "xxl":
                    setXxl(!xxl);
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
          <div className="inputTalles">
          <InputGroup className="mb-3">
          <FormControl
            onChange={handleValue}
            name="cantXxs"
            type="number"
            placeholder="Cant"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        </div>
        ):(<h1></h1>)}
        <Form.Check 
          type="switch"
          id="custom-switch"
          label="xs"
          onClick={handleChange}
          name="xs"
        />
        {xs?(
          <div className="inputTalles">
          <InputGroup className="mb-3">
          <FormControl
            onChange={handleValue}
            name="cantXs"
            type="number"
            placeholder="Cant"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        </div>
        ):(<h1></h1>)}
        <Form.Check 
          onClick={handleChange}
          type="switch"
          label="s"
          id="custom-switch"
          name="s"
        />
        {s?(
          <div className="inputTalles">
          <InputGroup className="mb-3">
          <FormControl
            onChange={handleValue}
            name="cantS"
            type="number"
            placeholder="Cant"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        </div>
        ):(<h1></h1>)}
        <Form.Check 
          onClick={handleChange}
          type="switch"
          label="m"
          id="custom-switch"
          name="m"
        />
        {m?(
          <div className="inputTalles">
          <InputGroup className="mb-3">
          <FormControl
            onChange={handleValue}
            name="cantM"
            type="number"
            placeholder="Cant"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        </div>
        ):(<h1></h1>)}
        <Form.Check 
          onClick={handleChange}
          type="switch"
          label="l"
          id="custom-switch"
          name="l"
        />
        {l?(
          <div className="inputTalles">
          <InputGroup className="mb-3">
          <FormControl
            onChange={handleValue}
            name="cantL"
            type="number"
            placeholder="Cant"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        </div>
        ):(<h1></h1>)}
        <Form.Check 
          onClick={handleChange}
          type="switch"
          label="xl"
          id="custom-switch"
          name="xl"
        />
        {xl?(
          <div className="inputTalles">
          <InputGroup className="mb-3">
          <FormControl
            onChange={handleValue}
            name="cantXl"
            type="number"
            placeholder="Cant"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        </div>
        ):(<h1></h1>)}
        <Form.Check 
          onClick={handleChange}
          type="switch"
          label="xxl"
          id="custom-switch"
          name="xxl"
        />
        {xxl?(
          <div className="inputTalles">
          <InputGroup className="mb-3">
          <FormControl
            onChange={handleValue}
            name="cantXxl"
            type="number"
            placeholder="Cant"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        </div>
        ):(<h1></h1>)}
      </Form>
    )
   
}