/*import React, { useState } from "react";
import moduleName from "react-router-dom";
import { Button, InputGroup, FormControl, Container,Row } from "react-bootstrap";
import axios from "axios";
import "./register.css";

export default function Registro() {
    const [idMarca, setIdMarca] = useState("fasdfsdfsdfg");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [categoria, setCategoria] = useState("");
    const [cuit, setCuit] = useState("");
    const [razonSocial, setRazonSocial] = useState("");
    const [condicionFrenteAlIva, setCondicionFrenteAlIva] = useState("");
    const [numeroIngresosBrutos, setNumeroIngresosBrutos] = useState("");
    const [suscripcion, setSuscripcion] = useState("");
    const [idPlantilla, setIdPlantilla] = useState("sadasdfgege3432");
    const [respuesta, setRespuesta] = useState("");

  
    function handleSubmit(event) {
      event.preventDefault();
  
      const params = new URLSearchParams();
      params.append('idMarca', idMarca);
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
      
  
  
      axios.post("http://localhost:5000/MarcaRegistro", params).then((res) => {
          console.log(res.data);
          setRespuesta(res.data);
          console.log(respuesta);
        }).catch((error) => {
          console.log(error)
        });
    }
  
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
        default:
          break;
      }
    };
  
    return (
      <Container fluid >
          <form  onSubmit={handleSubmit}>
            
   
    <div className="form">
     <InputGroup className="mb-3">
        <FormControl
            type = "text"
             name="name"
             onChange={handleChange}
            placeholder="ingrese su nombre"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <FormControl
            type = "password"
            name="password"
            onChange={handleChange}
            placeholder="ingrese su contraseña"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <FormControl
            type = "email"
             name="email"
             onChange={handleChange}
            placeholder="ingrese su email"
        />
      </InputGroup>
     
            
      <InputGroup className="mb-3">
        <FormControl
            type = "text"
             name="categoria"
             onChange={handleChange}
            placeholder="ingrese su categoria"
        />
      </InputGroup>
            
      <InputGroup className="mb-3">
        <FormControl
            type = "text"
             name="cuit"
             onChange={handleChange}
            placeholder="ingrese su cuit"
        />
      </InputGroup>
            
      <InputGroup className="mb-3">
        <FormControl
            type = "text"
             name="razonSocial"
             onChange={handleChange}
            placeholder="ingrese su razon social"
        />
      </InputGroup>
            
      <InputGroup className="mb-3">
        <FormControl
            type = "text"
             name="condicionFrenteAlIva"
             onChange={handleChange}
            placeholder="ingrese su condicion frente al iva"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <FormControl
            type = "number"
             name="numeroIngresosBrutos"
             onChange={handleChange}
            placeholder="ingrese su numero de ingresos brutos"
        />
      </InputGroup>
            
      <InputGroup className="mb-3">
        <FormControl
            type = "text"
             name="suscripcion"
             onChange={handleChange}
            placeholder="ingrese su suscripcion"
        />
      </InputGroup>
           
    <Button type="submit" variant="primary">
    Registrarse
  </Button>
  <h3>{respuesta}</h3>
  </div>

</form>
  </Container>
  
);
}*/