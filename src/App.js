import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
//import characters, { Rick } from './data.js'
import Nav from './components/Nav.jsx'
import { useState } from 'react'
import estilos from './estilos/Cards.module.css'

function App() {

  const [characters, setCharacters] = useState([]);

  /*   function onSearch(character) {
      console.log(character)
      const example = {
        name: 'Morty Smith',
        species: 'Human',
        gender: 'Male',
        image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      };
      setCharacters([
        ...characters, example
      ])
    } */

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  function onClose (id) {
    console.log(id.target.value, "pronado iD")
    let filtro = characters.filter((ele) => {
      if (ele.id != id.target.value) {
        return ele;
      }
    })
    console.log(filtro, "Filtro")
    setCharacters(filtro)
  }

  return (
    <div className={estilos.app} style={{ padding: '25px' }}>
      <div>
        <Nav
          onSearch={onSearch}
        />
      </div>

      <hr />
      <div>
        <Cards
          characters={characters}
          onClose={onClose}
        />
      </div>
    </div>
  )
}

export default App
