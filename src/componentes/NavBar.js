import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';

const NavBar = () =>{
    return (
<div className="NavBar">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Menú de Navegación</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Categorias</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Nombres</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Autores</a>
        </li>
      </ul>
    </div>
    <CartWidget></CartWidget>
  </div>
</nav>
</div>   
    )
}

export default NavBar;