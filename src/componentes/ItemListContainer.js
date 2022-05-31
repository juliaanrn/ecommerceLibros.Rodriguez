import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
    const { id } = useParams ();
    return (
        <>
            <div>Nombre: <span>{props.nombre}
            </span>
            </div>
            <div>Precio: <span>{props.precio}</span></div>
            <div>Autor: <span>{props.autor}</span></div>
            <div>Stock: <span>{props.stock}</span></div>
            <div>Categoria: <span>{props.categoria}</span></div>
        </>
    );
}

export default ItemListContainer;