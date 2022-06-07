import React from "react";
import Item from '../componentes/Item'

const ItemList = ({listaDeProductos}) => {
    return (
<>
            <h3>Lista de productos</h3>
<div>
            {listaDeProductos.map((producto) =><Item key={producto.id} producto={producto}/>)}
        </div>
    </>
    )

}

export default ItemList;