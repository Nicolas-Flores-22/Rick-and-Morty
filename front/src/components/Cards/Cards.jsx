import Card from '../Card/Card.jsx';
import style from './Cards.module.css';

function Cards({characters, onClose}) {
   //const { characters } = props;
   return (
      <div className={style.containerCards}>
         {
            characters.map(character => {
               return (
                  <Card 
                     key={character.id} 
                     name={character.name}
                     species={character.species}
                     gender={character.gender}
                     image={character.image}
                     id={character.id}
                     onClose={() => onClose(character.id)}
                  />
               )
            })
         }
      </div>
   );
}

export default Cards;
