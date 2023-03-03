import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "./Detail.module.css";

const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    // fetch(`https://rickandmortyapi.com/api/character/${detailId}`) ---> url del API
    //http://localhost:3001/rickandmorty/detail
    fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`) // url de nustro Server
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={style.detailCard}>

      <div className={style.containerBoton}>
        <Link className={style.linkDetailCard} to="/home">
          <button className={style.botonDetailCard}>
            BACK
          </button>
        </Link>
      </div>

      <div className={style.containerDatosCard}>
        <div className={style.datosDetailCard}>
          <h1>{character?.name}</h1>
          <hr />
          <h3>Status: {character?.status}</h3>
          <h3>Specie: {character?.species}</h3>
          <h3>Gender: {character?.gender}</h3>
          <h3>Origin: {character?.origin}</h3>
        </div>

        <div className={style.imagenDetailCard}>
          <img className={style.imagenDetail} src={character?.image} alt={character?.name} />
        </div>
      </div>

    </div>
  )
};

export default Detail;