
// ------ INTEGRACIÓN EXPRESS ------

const { Router } = require('express');
const { favs } = require('../utils/favs');


const favsRouter = Router();

favsRouter.post('/create', (request, response) => {
    // favs.push({ ...request.body });
    favs.push({...request.body})
    response.status(201).json(favs);
});

favsRouter.get('/get', (request, response) => {
    return response.json(favs);
});

favsRouter.delete('/delete/:id', (request, response) => {
    const { id } = request.params;

    // const newFavs = favs.filter(fav => fav.id !== Number(id));

    favs = favs.filter(fav => fav.id !== Number(id));
    
    return response.status(200).json(favs);

    // const fav = favs.find(user => user.id === Number(id));

    // if (!fav) return { error: `Usuario no encontrado` };
    // else {
    //     favs = favs.filter(user => user.id !== Number(id));
    //     return fav;
    // }

});


module.exports = {favsRouter};