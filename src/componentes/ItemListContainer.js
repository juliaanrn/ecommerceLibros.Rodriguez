const ItemListContainer = (props) => {
    return (
        <>
            <hr />
            <div>Nombre: <span>{props.nombre}
            </span>
            </div>
            <div>Precio: <span>{props.precio}</span></div>
            <div>Autor: <span>{props.autor}</span></div>
            <div>Categoria: <span>{props.categoria}</span></div>
            <button type="button" class="btn btn-danger position-relative">
                Añadir al carrito
                <span class="position-absolute top-0 start-100 translate-middle">
                    <span class="visually-hidden" ></span>
                </span>
            </button>
            <hr />
        </>
    );
}

export default ItemListContainer;