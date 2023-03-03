import { useDispatch, useSelector } from "react-redux";
import { orderCards, filterCards, actualizarFavorites } from "../../redux/actions/actions";
import { useEffect, useState } from "react";
import style from "./Favorites.module.css"

function Favorites() {

    const dispatch = useDispatch();
    let myFavorites = useSelector(state => state.myFavorites);

    const [orderValue, setOrderValue] = useState("Order By");
    const [filterValue, setFilterValue] = useState("Filter By");

    useEffect(() => {
        dispatch(actualizarFavorites());
    }, [dispatch, myFavorites, orderValue, filterValue]);

    const hundleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setOrderValue(event.target.value);
    };

    const hundleFilter = (event) => {
        dispatch(filterCards(event.target.value));
        setFilterValue(event.target.value);
    };

    return (
        <div className={style.containerFavorite}>
            <div className={style.botonesFavorite}>
                <select className={style.selectOrder} onChange={hundleOrder} value={orderValue}>
                    <option>Order By</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select className={style.selectFilter} onChange={hundleFilter} value={filterValue}>
                    <option>Filter By</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>

            <div className={style.containerCardFavorite}>
                {
                    myFavorites.map(favorite => {
                        return (
                            <div className={style.cardFavorite} key={favorite.id}>
                                <div className={style.nombreFavorite}>
                                    <h2>{favorite.name}</h2>
                                </div>
                                <img className={style.imagenFavorite} src={favorite.image} alt={favorite.name}></img>
                                <div className={style.specieGenderFavorite}>
                                    <h2 className={style.specieFavorite}>{favorite.species}</h2>
                                    <h2 className={style.genderFavorite}>{favorite.gender}</h2>
                                </div>
                            </div>
                        );
                    })
                }
            </div>

        </div>
    );
};


export default Favorites;