import { useState } from 'react';

const ItemCount = () =>{
    let añadirAlCarrito= 0;

const [valoraciones, setValoraciones] = useState(0);
    
const increment = () => {
if (valoraciones < 3) setValoraciones(valoraciones+1);
}    
    
    
    return (
<>
<p>{valoraciones} unidades</p>
<button onClick= {increment}>Sumar Unidades</button>
</>
    );
}

export default ItemCount;