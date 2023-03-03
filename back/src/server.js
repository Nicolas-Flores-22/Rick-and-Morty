// const characters = require('./utils/data.js');
// const http = require('http');

// http.createServer((request, response) => {
//     response.setHeader('Access-Control-Allow-Origin', '*');

//     if (request.url.includes("/rickandmorty/character/")) {
//         let id = request.url.split("/").pop();
//         // const characterFilter = characters.filter(char => char.id === Number(id));
//         const characterFilter = characters.find(char => char.id === Number(id));
//         // console.log(characterFilter);

//         if (characterFilter) {
//             response.writeHead(200, { "Content-Type": "application/json" });
//             response.end(JSON.stringify(characterFilter));
//         } else {
//             response.writeHead(404, { "Content-Type": "text/plain" });
//             response.end('Caracter no encontrado');
//         }
//     }

// }).listen(3001, "localhost");

// const http = require('http');
// const getCharById = require('./controllers/getCharById');
// const getCharDetail = require('./controllers/getCharDetail');

// http.createServer((request, response) => {
//     response.setHeader('Access-Control-Allow-Origin', '*');
//     let id = request.url.split("/").pop();

//     if (request.url.includes('onsearch')) {
//         getCharById(response, id)
//     }

//     if(request.url.includes('detail')){
//         getCharDetail(response, id)
//     }

// }).listen(3001, "localhost");


// SERVER CON EXPRESS
const express = require('express');
const server = express();
const cors = require('cors');
const {router} = require('./routes/index');
const {favsRouter} = require('./routes/favsRouter');


const PORT = 3001;

server.use(express.json()); //Para que funcione el server con formato json
server.use(cors());
server.use('/rickandmorty', router);
server.use('/favs', favsRouter);

server.listen(PORT, () => {
   console.log('Server raised in port ' + PORT);
});