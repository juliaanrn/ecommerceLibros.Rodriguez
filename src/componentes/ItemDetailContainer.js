import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
const { productos } = require("../componentes/productos");

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { id } = useParams();




return (
    <ItemDetail item={dato} />
);
}

export default ItemDetailContainer;