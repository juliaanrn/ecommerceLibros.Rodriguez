import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



const Libros = (props) => {
  return (
    <>
      <hr />
      <h2>{props.name}</h2>
      <div>Categoria: <span>{props.categoria}</span></div>
      <div>Precio: <span>{props.precio}</span></div>
      <div>Duración: <span>{props.autor} semanas</span></div>
      <div>Duración: <span>{props.autor} semanas</span></div>
      <div><Link to ='/item/id'>Conocer más</Link></div>
    </>
  );
}



export default App;