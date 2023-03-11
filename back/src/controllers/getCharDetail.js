// const axios = require('axios');

// const getCharDetail = (response, id) => {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//         .then(result => result.data)
//         .then(data => {
//             let character = {
//                 image : data.image,
//                 name : data.name,
//                 gender : data.gender,
//                 status: data.status,
//                 origin : data.origin.name,
//                 species : data.species
//             }
//             response
//             .writeHead(200, {'Content-Type': 'application/json'})
//             .end(JSON.stringify(character))
//         })
//         .catch(error => 
//             response
//             .writeHead(500, { 'Content-Type': 'text/plain' })
//             .end(`El personaje con ${id} no fue encontrado`)
//         )
// };

// module.exports = getCharDetail;




// ------ INTEGRACIÓN EXPRESS ------
// const axios = require('axios');
// const URL = "https://rickandmortyapi.com/api/character/";

// const getCharDetail = async (request, response) => {
//     const { id } = request.params;

//     if(id){
//         try {
//             const response = await axios(URL + id);
//             const character = {
//               id: response.data.id,
//               name: response.data.name,
//               species: response.data.species,
//               image: response.data.image,
//               gender: response.data.gender,
//               status: response.data.status,
//               origin: response.data.origin.name,
//             };
//             return res.status(200).json(character);
//           } catch (error) {
//             return res.status(500).send(error.message);
//           }
//     }else{
//         return response.status(400).send("Debes proveer un id por parametro");
//     }

//     // axios(URL + id)
//     //     .then((res) => {
//     //         const character = {
//     //             image: res.data.image,
//     //             name: res.data.name,
//     //             gender: res.data.gender,
//     //             status: res.data.status,
//     //             origin: res.data.origin.name,
//     //             species: res.data.species
//     //         }
//     //         return response.status(200).json(character);
//     //     })
//     //     .catch(error => {
//     //         response.status(500).json(error.message);
//     //     })
// };


//------- INTEGRACIÓN ORM ------
const { Favorites } = require('../DB_connection');

const getCharDetail = async (id) => {
  try {
    const favoriteDelete = await Favorites.findByPk(id);

    if(!favoriteDelete) throw new Error("No existe el personaje a eliminar");

    favoriteDelete.destroy();
    return "Favorito eliminado correctamente";
  } catch (error) {
    return {error: error.message};
  }
}

module.exports = {getCharDetail};