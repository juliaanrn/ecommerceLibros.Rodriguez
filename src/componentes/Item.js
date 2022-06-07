import React from "react";
import ItemCount from "./ItemCount";

const Item = ({producto}) => {
    const {name, img, autor, categoria, stock} = producto
    return (
        <div className="card" style={{width:'18rem', margin: '.5rem'}}>
        <img src ={img} className="card-img-top" alt ={name}/>
        <div className="card-body">
            <p className="card-text">{autor}</p>
            <p className="card-text">{categoria}</p>
            <p className="card-text">{stock}</p>
        </div>
        <ItemCount stock={stock}/>
        </div>
    )
}

export default Item