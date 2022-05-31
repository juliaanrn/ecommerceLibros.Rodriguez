import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
const { productos } = require("../componentes/productos");

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { id } = useParams();

    useEffect(() => {
        customFetch(2000, productos.find(item => item.id === (id)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);


return (
    <ItemDetail item={dato} />
);
}

export default ItemDetailContainer;