import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductoRecomendado from "./ProductoRecomendado";

export default function CarouselProds(props){
  const {verProducto, productos, producto} = props;
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

  

      return (
        <Carousel className="Carousel" responsive={responsive}>
                    {productos.filter(prod=> (prod.tipoDeProducto==producto.tipoDeProducto)&&(prod.idProducto!=producto.idProducto)).map(prodFiltrado=> ( 
                    <ProductoRecomendado verProducto={verProducto} producto={prodFiltrado}/>
                ))}
            </Carousel>
      )
      
}
