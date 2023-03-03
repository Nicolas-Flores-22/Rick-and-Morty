import style from './Card.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../redux/actions/actions';



function Card({ id, name, onClose, gender, species, image, myFavorites, addFavorite, deleteFavorite }) {

   const [isFav, setIsFav] = React.useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         deleteFavorite(id);
      }else{
         setIsFav(true);
         addFavorite({name, gender, species, image, id});
      }
   };

   React.useEffect(() => {
      
      //FOREACH
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });

      //FOR
      // for (let i = 0; i < myFavorites.length; i++) {
      //    if(myFavorites[i].id === id) {
      //       setIsFav(true);
      //       break;
      //    }
      // }

   }, [myFavorites]);

   return (
      <div className={style.containerCard}>
         {
            isFav ? (
               <button className={style.botonCardFavorite} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={style.botonCardFavorite} onClick={handleFavorite}>🤍</button>
            )
         }
         <button className={style.botonCard} onClick={onClose}>X</button>
         <Link className={style.linkName} to={`/detail/${id}`}>
            <div className={style.nombrePersonaje}>
               <h2>{name}</h2>
            </div>
         </Link>
         <img className={style.imagenPersonaje} src={image} alt={name}></img>
         <div className={style.speciesGender}>
            <h2 className={style.specie}>{species}</h2>
            <h2 className={style.gender}>{gender}</h2>
         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (name) => dispatch(addFavorite(name)),
      deleteFavorite: (id) => dispatch(deleteFavorite(id)),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);

