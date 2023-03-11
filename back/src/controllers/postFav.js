const { Favorites } = require('../DB_connection');


const postFav = async (character) => {
    try {
        const { id, name, status, species, origin, image, gender } = character;

        if(!id || !name ||!status ||!species ||!origin ||!image ||!gender) throw new Error('Faltan datos obligatorios.');

        const newFavorite = {
            id, 
            name, 
            status, 
            species, 
            origin, 
            image, 
            gender
        }

        await Favorites.create(newFavorite);
    } catch (error) {
        return {error: error.message };
    }
}

module.exports = { postFav };