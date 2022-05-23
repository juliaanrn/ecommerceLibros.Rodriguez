const CartWidget = () => {
    return (
<button type="button" class="btn btn-warning position-relative">
  Carrito
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    5
    <span class="visually-hidden">productos sumados</span>
  </span>
</button>
    );
}

export default CartWidget;