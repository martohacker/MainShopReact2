import { Col, Container, Row, InputGroup, FormControl } from "react-bootstrap";
import CardProducto from "./componentesTemplates/CardProducto";
import Logo from "./componentesTemplates/LogoNike.png"
import './templates.css';


export default function Template1(props) {
const {productos} = props;
    return (
        <>
         <img src={Logo} className="logo"></img>
        
    <Row style={{marginLeft:0, marginRight:0}}>
    
    {productos.map((prod)=>(
            <CardProducto key={prod.idProducto} producto={prod} />
        )) }
        
        </Row>
   </>
    )
}




/*<Col md="3">
<div className="filtros">
<InputGroup className="mb-3">
        <FormControl
        placeholder="Buscar"
        aria-label="Username"
        aria-describedby="basic-addon1"
        />
</InputGroup>

</div>
</Col>
*/
