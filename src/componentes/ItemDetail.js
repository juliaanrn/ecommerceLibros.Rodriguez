import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { CartContext } from "./CartContext";
import CheckoutButton from "./checkOutButton"

const ItemDetail = ({producto}) => {
    const {id,name, img, costo, categoria, stock} = producto
    const [itemcount, setItemCount] = useState(0);
    const { addItem } = useContext(CartContext)

    const onAdd =(cantidad)=>{
        setItemCount(cantidad)
        addItem({id,name, img, costo, categoria, stock})
    }

    return (
        <>
            <div className="productDetail">
                {
                    <>
                        <div className="productDetail text-light py-1">
                            <div>
                                <h1 className="px-2 display-3">{name}</h1>
                                <hr className="bg-secondary mx-5"></hr>
                            </div>
                            <div >
                                <img src={img} className="imgDetail" alt={name}></img>
                            </div>
                            <div>
                                <hr className="bg-secondary mx-5"></hr>
                                <p className="lead">{costo}</p>
                            </div>
                        </div>

                        {   itemcount === 0?
                            <ItemCount stock={producto.stock} initial={itemcount} onAdd={onAdd}/> : <CheckoutButton />}
                    </>
                }
            </div>
        </>
    )
}

export default ItemDetail;