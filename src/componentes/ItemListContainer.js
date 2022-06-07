import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { getData } from '../mocks/fakeapi'

const ItemListContainer = (props) => {

    const [listaProductos, setListaProductos] = useState([])
    const [cargando, setCargando] = useState(false)

    useEffect(() => {
        setCargando(true)
        getData
            .then((res) => setListaProductos(res))
            .catch((error) => console.log(error))
            .finally(() => setCargando(false))
    }, [])

    return (
        <div>
            <h1>Lista de productos</h1>
            {cargando ? <p>Cargando...</p> : <ItemList listaProductos={listaProductos} />}
        </div>
    )
}

export default ItemListContainer;