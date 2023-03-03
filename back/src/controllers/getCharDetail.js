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
const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";

const getCharDetail = (request, response) => {
    const { id } = request.params;
    axios(URL + id)
        .then((res) => {
            const character = {
                image: res.data.image,
                name: res.data.name,
                gender: res.data.gender,
                status: res.data.status,
                origin: res.data.origin.name,
                species: res.data.species
            }
            return response.status(200).json(character);
        })
        .catch(error => {
            response.status(500).json(error.message);
        })
};

module.exports = {getCharDetail};