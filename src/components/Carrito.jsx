import React, { useEffect, useState } from "react";
import axios from "axios";
import store from '../store/index';

export default function Carrito(){
    const [carrito, setCarrito] = useState([]);
    const [id, setId] = useState("");
    useEffect(() => {
        async function getCarrito() {
            getId();
            await axios.get("http://localhost:8000/GetCarrito").then((res) => {
                console.log(res.data);
                console.log("entre al use effect")
                setCarrito(res.data);
                
            }).catch((error) => {
                console.log(error)
            });
        };        
        
        getCarrito();
    }, [])

    function getId() {
        const state = store.getState();
        const id = state.id;
        setId(id);
      }
    return(
        <h2>hola</h2>
    )
} 