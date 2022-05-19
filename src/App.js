import './App.css';
import NavBar from './componentes/NavBar';
import Libros from './componentes/ItemListContainer';


const App = () => {
  return (
    <>
      <div className="App">
        <NavBar></NavBar>
        <h2>Libros</h2>
      </div>
      {}
      <Libros nombre="La Guerra de los Mundos" precio="$1.000" autor="H. G. Welles" categoria="Ficcion" />
      {}
      <Libros nombre="Winnieh-ThePooh" precio="$1.500" autor="A. A. Milne" categoria="Infantil" />
      {}
      <Libros nombre="Sherlock Holmes" precio="$1.350" autor="Arthur Conan Doyle" categoria="Policial" />
    </>
  );
}

export default App;
