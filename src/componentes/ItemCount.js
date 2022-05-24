import { useState } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {

    const [valoraciones, setValoraciones] = useState(initial = 0);

    const increment = () => {
        if (valoraciones < stock) setValoraciones(valoraciones + 1);
    }

    const decrement = () => {
        if (valoraciones > stock) setValoraciones(valoraciones - 1);
    };

    return (
        <>
            <p>{valoraciones} Unidades</p>
            <button onClick={increment}>Sumar Unidades</button>
            <button onClick={decrement}>Restar Unidades</button>
            <button onClick={() => onAdd(valoraciones)}>Agregar al Carrito</button>
        </>
    );
}

export default ItemCount;