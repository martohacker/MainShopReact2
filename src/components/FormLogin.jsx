import React from "react";
import { Button, InputGroup, FormControl,Container,Col,Row, Form } from "react-bootstrap";

export default function FormLogin(props){
    const {setEmail, setPassword, setHasAccount, hasAccount, handleLogin, emailError, passwordError} = props;
        return(
            <>
        <div className="login">
            <div className="loginContainer">
                <input
                    type="text"
                    placeholder="Email"
                    autoFocus
                    required
                    onChange={(event) => setEmail(event.target.value)}
                 />
                 <p className="errorMsg">{emailError}</p>
                 <input
                 placeholder="Password"
                 type="password"
                 required
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
        ) 
}