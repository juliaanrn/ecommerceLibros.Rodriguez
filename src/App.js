import './App.css';
import NavBar from './componentes/NavBar';
import ItemCount from './componentes/ItemCount';
import ItemListContainer from './componentes/ItemListContainer';


const App = () => {
  return (
    <>
      <div className="App">
        <NavBar></NavBar>
        <h2>Libros</h2>
      </div>
      <ItemListContainer nombre="La Guerra de los Mundos" precio="$1.000" autor="H. G. Welles" categoria="Ficcion" />
      <ItemCount></ItemCount>
      <hr></hr>
      <ItemListContainer nombre="Winnieh-ThePooh" precio="$1.500" autor="A. A. Milne" categoria="Infantil" />
      <ItemCount></ItemCount>
      <hr></hr>
      <ItemListContainer></ItemListContainer>
      <ItemCount></ItemCount>
      <hr></hr>
    </>
  );
}

export default App;
