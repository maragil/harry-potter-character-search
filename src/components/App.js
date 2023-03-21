/* SECCIÓN DE IMPORT */
import { useEffect, useState } from 'react';
import getDataApi from '../services/api';
import CharacterList from './CharacterList';
import Filters from './Filters';
import '../styles/App.scss';


/* SECCIÓN DEL COMPONENTE */
function App() {
  /* VARIABLES ESTADO (DATOS) */
  const [listCharacter, setListCharacter] = useState([]);
  const [nameFilter, setNameFilter] = useState('');

  /* EFECTOS*/
  useEffect(() => {
    getDataApi().then((cleanData) => {
      setListCharacter(cleanData);
    });
  }, []);

  /* FUNCIONES HANDLER */
  const handleNameFilter = (value) => {
    setNameFilter(value);
  };

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */
  const characterFiltered = listCharacter
    .filter((eachCharacter) => eachCharacter.name.toLocaleLowerCase().includes(nameFilter.toLocaleLowerCase()));

  /* HTML */
  return (
    <div>
      <h1>Buscador de Harry Potter</h1>
      <main>
        <Filters handleNameFilter={handleNameFilter}></Filters>
        <CharacterList listCharacter={characterFiltered}></CharacterList>
      </main>
    </div>
    );
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
