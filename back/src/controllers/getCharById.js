// const axios = require('axios');

// const getCharById = (response, id) => {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//         .then(result => result.data)
//         .then(data => {
//             let character = {
//                 id : data.id,
//                 image : data.image,
//                 name : data.name,
//                 gender : data.gender,
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

// module.exports = getCharById;


// ------ INTEGRACIÓN EXPRESS ------
const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (request, response) => {
    const { id } = request.params;

    try {
        const response = await axios(URL + id);
        const character = {
            id: response.data.id,
            name: response.data.name,
            species: response.data.species,
            image: response.data.image,
            gender: response.data.gender,
        };
        res.status(200).json(character);
    } catch (error) {
        res.status(500).send(error.message);
    }

    // axios(URL + id)
    //     .then((res) => {
    //         let character = {
    //             id: res.data.id,
    //             image: res.data.image,
    //             name: res.data.name,
    //             gender: res.data.gender,
    //             species: res.data.species
    //         };
    //         response.status(200).json(character);
    //     }, (error) => {
    //         response.status(500).send(error.message);
    //     });
};

module.exports = { getCharById };
