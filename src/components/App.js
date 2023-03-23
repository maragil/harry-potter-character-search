/* SECCIÓN DE IMPORT */
import { useEffect, useState } from 'react';
import { matchPath, Route, Routes, useLocation } from 'react-router-dom';
import getDataApi from '../services/api';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import logo from '../../src/images/logo.png';
import '../styles/App.scss';

/* SECCIÓN DEL COMPONENTE */
function App() {

  /* VARIABLES ESTADO (DATOS) */
  const [listCharacter, setListCharacter] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [houseFilter, setHouseFilter] = useState('Gryffindor');

  /* EFECTOS*/
  useEffect(() => {
    // let test=houseFilter;
    getDataApi(houseFilter).then((cleanData) => {
      setListCharacter(cleanData);
    });
  }, [houseFilter]);

  /* FUNCIONES HANDLER */
  const handleNameFilter = (value) => {
    setNameFilter(value);
  };

  const handleHouseFilter = (value) => {
    setHouseFilter(value);
  };

  const handleReset = () => {
    setNameFilter('');
    setHouseFilter('Gryffindor');
  }

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */
  const characterFiltered = listCharacter
    .filter((eachCharacter) => eachCharacter.name.toLocaleLowerCase().includes(nameFilter.toLocaleLowerCase()))
    .filter((eachCharacter) => {
      return eachCharacter.house === houseFilter
    } )

  const {pathname} = useLocation();
  const dataUrl = matchPath('/character/:id', pathname);

  const characterId = dataUrl !== null ? dataUrl.params.id : null

  const characterFind = characterFiltered.find((eachCharacter) => eachCharacter.id === characterId)


  /* HTML */
  return (
    <div>
      <header className='hero' logo={logo}></header>
      <main className='main'>
        <Routes>
          <Route path='/'
                  element={
                    <>
                      <Filters handleNameFilter={handleNameFilter} nameFilter={nameFilter} handleHouseFilter={handleHouseFilter} houseFilter={houseFilter} handleReset={handleReset}></Filters>
                      <CharacterList listCharacter={characterFiltered} nameFilter={nameFilter}></CharacterList>
                    </>}>
          </Route>
          <Route path='/character/:id' element={<CharacterDetail characterFind={characterFind}/>} />
        </Routes>
      </main>
    </div>
  );
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
