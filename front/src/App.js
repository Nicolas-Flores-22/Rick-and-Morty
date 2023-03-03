import './App.css'

import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'

import About from './components/About/About.jsx'
import Cards from './components/Cards/Cards.jsx'
import Detail from './components/Detail/Detail.jsx'
import Error from './components/Error/Error.jsx'
import Favorites from './components/Favorites/Favorites.jsx'
import Form from './components/Form/Form.jsx'
import Nav from './components/Nav/Nav.jsx'


function App() {

  const [characters, setCharacters] = useState([]);

  const location = useLocation();

  const [access, setAccess] = useState(false);

  const username = 'nicolas_flores22@outlook.com';
  const password = 'Nico*220799';
  const navigate = useNavigate();


  const login = (userData) => {
    // if (userData.username === username && userData.password === password) {
    //   setAccess(true);
    //   navigate('/home');
    // }
  }

  // useEffect(() => {
  //   !access && navigate('/');
  // }, [access]);

  const onSearch = (character) => {
    // fetch(`https://rickandmortyapi.com/api/character/${character}`) --> URL DE LA API
    // fetch(`http://localhost:3001/rickandmorty/character/${character}`) --> URL DE NUESTRO SERVER
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          //Acá verificamos si el personaje ya existe en el estado "characters"
          const exists = characters.some((character) => character.id === data.id);
          if(!exists) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert('Este personaje ya ha sido agregado recientemente.');
          }
        } else {
          window.alert('No hay personajes con ese ID.');
        }
      });
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    );
  };

  return (
    <div className='App' style={{ padding: '25px' }}>

      {/* {!access && location.pathname !== '/' ? (
        <Error />
      ) : (
        <>
        </>
      )} */}
          {location.pathname === '/' ? <Form login={login} /> : <Nav onSearch={onSearch} />}

          <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:detailId' element={<Detail />} />
            <Route path='/favorites' element={<Favorites />} />
            {/* <Route path='*' element={<Error />} /> */}
          </Routes>

    </div>
  )
}

export default App;
