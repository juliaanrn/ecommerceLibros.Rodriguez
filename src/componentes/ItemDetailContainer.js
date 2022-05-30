import ItemDetail from "./ItemDetail";
const { productos } = require ("../componentes/productos");

let is_stock 

const GetItem = (timeout, task) => {
    return ItemDetail((resolve, reject) => {
        if (is_stock) {
            setTimeout(() => {
                resolve(task)
            }, timeout);
        } else {
            reject("Error")
        }
    })
}

cargarcatalogo()
    .then(() => cargarcatalogo(3000))
    .catch((err) => console.log(err))
    .finally();

export default ItemDetailContainer;