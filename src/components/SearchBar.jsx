import React, { useEffect, useState } from "react";
import estilos from '../estilos/Nav.module.css'

export default function SearchBar(props) {

   const [character, setCharacter] = useState("");
   const [input, setInput] = useState("")
   
   function inputChange (e) {
      setCharacter(e.target.value)
      
   }

   function invocandoOnSearch (e) {
      props.onSearch(character)
      console.log(e)
   }
   


   return (
      <div className={estilos.searchBar}>
         <input type='text' onChange={inputChange} value={character}/>
         <button onClick={invocandoOnSearch}>Agregar</button>
      </div>
   );
}
