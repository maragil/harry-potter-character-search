/* SECCIÓN DE IMPORT */
import { useEffect, useState } from 'react';
import getDataApi from '../services/api';
// - De React
// - Nuestros
// - Sass
import '../styles/App.scss';
// - Imágenes

/* SECCIÓN DEL COMPONENTE */
function App() {
  /* VARIABLES ESTADO (DATOS) */
  const [listCharacter, setListCharacter] = useState([]);

  /* EFECTOS*/
  useEffect(() => {
    getDataApi().then((cleanData) => {
      setListCharacter(cleanData);
    });
  }, []);

  /* FUNCIONES HANDLER */

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */

  /* HTML */
  return <div>
    <h1>Buscador de Harry Potter</h1>
  </div>;
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
