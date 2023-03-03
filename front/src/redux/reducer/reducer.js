import { ADD_FAVORITE, DELETE_FAVORITE, FILTER_FAVORITES, ORDER_FAVORITES, ACTUALIZAR_FAVORITES } from "../actions/types";

const initialState = {
    myFavorites: [],
    allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]

                // ------ INTEGRACIÓN EXPRESS ------
                // myFavorites: action.payload,
                // allCharacters: action.payload
            };
        
        case DELETE_FAVORITE:
            return{
                ...state,
                myFavorites: state.myFavorites.filter(favorite => favorite.id!== action.payload)
                // ------ INTEGRACIÓN EXPRESS ------
                // myFavorites: action.payload
            };

        case FILTER_FAVORITES:
            const allCharactersFiltered = state.allCharacters.filter(favorite => favorite.gender === action.payload);
            
            return{
                ...state,
                myFavorites: action.payload === "Filter By" ? state.allCharacters : allCharactersFiltered,
            };
        
        case ORDER_FAVORITES:
            
            return{
                ...state,
                myFavorites: action.payload === "Order By" ? state.allCharacters : action.payload === "Ascendente" ? 
                state.myFavorites.sort((a, b) => a.id - b.id) 
              : state.myFavorites.sort((a, b) => b.id - a.id)

            };
        
        case ACTUALIZAR_FAVORITES:
            return{
                ...state,
            };
        
        default:
                return {...state};

    }
};

export default rootReducer;