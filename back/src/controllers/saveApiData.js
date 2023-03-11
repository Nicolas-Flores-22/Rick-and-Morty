const axios = require('axios');
const { Character } = require('../DB_connection');

const URL = "https://rickandmortyapi.com/api/character";

// async function getApiData() {
//   // obtener los primeros 100 personajes
//   // https://rickandmortyapi.com/api/character

//   try {
//     // let pages = ["1", "2", "3", "4", "5"].map(num => );

//     // intentar async
//     let characters = [];
//     // let URL = URL
//     for (let i = 0; i < 5; i++) {
//       const result = await axios(URL);
//       const personajes = result.data.results;
//       characters.push(...personajes);
//       URL = result.data.info.next;
//     }

//     // console.log(characters);
//     // console.log("before format");
//     const format = characters.map((pj) => {
//       // console.log(pj);
//       return {
//         id: pj.id,
//         name: pj.name,
//         species: pj.species,
//         origin: pj.origin.name,
//         gender: pj.gender,
//         image: pj.image,
//         status: pj.status,
//       };
//     });

//     // console.log("format", format);
//     return format

//     // return format;
//   } catch (error) {
//     return { error: error.message };
//   }
// }

// const getApiData = async () => {
//   //obtener los primeros 100 personajes
//   try {
//     let i = 1;
//     let characterPromise = [];
//     //[Promise <pending>], [Promise <pending>], [Promise <pending>], [Promise <pending>], [Promise <pending>]

//     while (i < 6) {
//       let apiData = await axios(`https://rickandmortyapi.com/api/character?page=${i}`);

//       characterPromise.push(apiData);
//       i++;
//     }

//     // characterPromise = [[]]
//     characterPromise = await Promise.all(characterPromise).map(res => res.data.results.map(char => {
//       return {
//         id: char.id,
//         name: char.name,
//         status: char.status,
//         species: char.species,
//         gender: char.gender,
//         origin: char.origin.name,
//         image: char.image,
//       }
//     }));

//     let characterAll = [];

//     characterPromise.map(char => characterAll.concat(char));

//     return characterAll;

//   } catch (error) {
//     return { error: error.message };
//   }
// }

const getApiData = async (url, character = []) => {
  try {
    if(character.length === 100) return character;

    const { info, results } = (await axios(url)).data;
    // console.log(info, 'Soy info');
    // console.log(results, 'Soy results');

    results.forEach(char => {
      if(character.length < 100) character.push({
        id: char.id,
        name: char.name,
        species: char.species,
        status: char.status,
        origin: char.origin.name,
        gender: char.gender,
        image: char.image,
      });
    });

    return getApiData(info.next, character);

  } catch (error) {
    return { error: error.message };
  }
};

const saveApiData = async () => {
  try {
    const allCharacters = await getApiData(URL);
    // console.log('Soy saveApiData', allCharacters);
    await Character.bulkCreate(allCharacters);
    //bulkCreate => permite pasarle un array de objetos y los crea todos juntos en la Base de Datos
    return allCharacters;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = { saveApiData };