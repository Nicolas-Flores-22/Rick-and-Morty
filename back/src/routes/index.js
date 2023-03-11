// ------ INTEGRACIÓN EXPRESS ------
const { Router } = require('express');
const { getCharById } = require('../controllers/getCharById');
const { getCharDetail } = require('../controllers/getCharDetail');
// const { getApiData } = require('../controllers/saveApiData');
const { postFav } = require('../controllers/postFav');
const { getAllFavorites } = require('../controllers/getAllFavorites');
const { getAllChars } = require('../controllers/getAllChars');
const { Character } = require('../DB_connection');

const router = Router();

// ya tienen "/rickandmorty/" antes
router.get('/onsearch/:id', getCharById);
router.get('/detail/:id', getCharDetail);
router.get('/character/:id', getAllFavorites);

// router.get('/allCharacters', async (request, response) => {
//     try {
//         const allCharacters = await getApiData();

//         await Character.bulkCreate(allCharacters);
//         return response.json(allCharacters);
//     } catch (error) {
//         return response.send('Hubo un problema al obtener los datos');
//     }
// });

router.get('/allCharacters', async (request, response) => {
  try {
    const allCharacters = await getAllChars();
    response.status(200).json(allCharacters);
  } catch (error) {
    response.status(404).send('Hubo un problema en /allCharacters');
  }
})

router.get("/alldb", async (req, res) => {
    try {
      const info = await Character.findAll();
      return res.json(info);
    } catch (error) {
      return res.send(error);
    }
  });

router.post("/fav", async (req, res) => {
  try {
    const characterFav = await postFav(req.body);

    if(characterFav.error) throw new Error(characterFav.error);

    return res.status(200).json(characterFav);

  } catch (error) {
    return res.status(400).json({error: error.message});
  }
})

router.get("/fav", async (req, res) => {
  try {
    const allFavorites = await getAllFavorites();

    if(allFavorites.error) throw new Error(allFavorites.error);

    return res.status(200).json(allFavorites);
  } catch (error) {
    return res.status(404).json({error: error.message});
  }
});

router.delete("/fav/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const deleteFav = await getCharDetail(parseInt(id));

    if(!deleteFav) throw new Error(deleteFav.errors)

    return res.status(200).json(deleteFav);
  } catch (error) {
    return res.status(404).json({error: error.message});
  }
});

module.exports = {router};
