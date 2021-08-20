import React, {useState} from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import firebase from "firebase";
const db = require("../firebase");


export default (props) => {

    function validarIngreso(){
        firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
      console.log("hola");
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log(user.name);
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      console.log(uid);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
    }



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleChange = (event) => {
        switch (event.target.name) {
          case "email":
            setEmail(event.target.value);
            break;
        case "password":
            setPassword(event.target.value);
            break;
        }
    }

  return (
    <>
    <form onSubmit={validarIngreso()}>
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
      </form>
    </>
  );
};