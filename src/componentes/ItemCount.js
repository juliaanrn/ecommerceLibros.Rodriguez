import React from 'react';
import { useState } from 'react';



const ItemCount = (stock) => {
    const [valoraciones, setValoraciones] = useState(0)

    const increment = () => {
        if(valoraciones < stock){
    setValoraciones(valoraciones + 1)
    }
    }

    const decrement = () => {
        if (valoraciones > 0) setValoraciones(valoraciones - 1)
    }


    return (
        <>
            <p>{valoraciones} Unidades</p>
            <button onClick={increment}>Sumar Unidades</button>
            <button onClick={decrement}>Restar Unidades</button>
        </>
    );
}

export default ItemCount;