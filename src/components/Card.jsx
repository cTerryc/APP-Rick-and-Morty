import React from "react";
import estilos from '../estilos/Cards.module.css'

export default function Card(props) {
   return (
      <div key={props.id} className={estilos.card}>
         <button onClick={(e) => props.onClose(e)} value={props.id}>X</button>
         <img src={props.image} alt="imagen Rick" />
         <h2 className={estilos.name}>{props.name}</h2>
         <h2 className={estilos.specie}>{props.species}</h2>
         <h2 className={estilos.gender}>{props.gender}</h2>
      </div>
   );
}
