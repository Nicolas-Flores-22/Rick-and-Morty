import { ADD_FAVORITE, DELETE_FAVORITE, FILTER_FAVORITES, ORDER_FAVORITES, ACTUALIZAR_FAVORITES } from "../actions/types";
// import axios from "axios";


export const addFavorite = (name) => {
    // ------ INTEGRACIÓN EXPRESS ------
    // return function (dispatch) {
    //     axios.post("http://localhost:3001/favs/create", name)
    //         .then(response => {
    //             return dispatch({
    //                 type: ADD_FAVORITE,
    //                 payload: response.data
    //             })
    //         })
    // }

    return{
        type: ADD_FAVORITE,
        payload: name
    };
}

export const deleteFavorite = (id) => {
    // ------ INTEGRACIÓN EXPRESS ------
    // return function (dispatch) {
    //     axios.delete(`http://localhost:3001/favs/delete/${id}`)
    //         .then(response => {
    //             return dispatch({
    //                 type: DELETE_FAVORITE,
    //                 payload: response.data
    //             });
    //         });

    // }

    return {
        type: DELETE_FAVORITE,
        payload: id
    };
};

export const filterCards = (gender) => {
    return {
        type: FILTER_FAVORITES,
        payload: gender
    };
};

export const orderCards = (id) => {
    return {
        type: ORDER_FAVORITES,
        payload: id
    };
};

export const actualizarFavorites = () => {
    return {
        type: ACTUALIZAR_FAVORITES,
    };
};