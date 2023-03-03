import style from './SearchBar.module.css';
import { useState } from 'react';

function SearchBar({onSearch}) {

   const [character, setCharacter] = useState('');

   const handleChange = (event) => {
      setCharacter(event.target.value);
   };

   return (
      <div>
         {
            <div className={style.divAgregar}>
               <input type='search' value={character} onChange={handleChange} />
               <button className={style.botonSearch} onClick={()=>onSearch(character)}>AGREGAR</button>
            </div>
         }
      </div>
   );
}

export default SearchBar;
