import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'

const NavBar = () =>{
    return (
<div className="NavBar">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" style={{color: 'black'}} href="#"> <Link to='/'> Ecommerce de Libros </Link></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><Link to='/category/id:2'>Categorias</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><Link to='/category/id:3'>Nombres</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><Link to='/category/id:4'>Autores</Link></a>
        </li>
      </ul>
    </div>
    <CartWidget></CartWidget>
  </div>
</nav>
</div>   
    );
}

export default NavBar;