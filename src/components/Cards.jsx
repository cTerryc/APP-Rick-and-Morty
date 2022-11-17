import Card from './Card';
import estilos from '../estilos/Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   let id = 1;
   return (
      <div className={estilos.container}>
         {characters.map((e) => {
            return (
               <Card
               key={id++}
               name={e.name}
               species={e.species}
               gender={e.gender}
               image={e.image}
               onClose={props.onClose}
               id={e.id}
               />
            )
         })}
      </div>
   )
}
