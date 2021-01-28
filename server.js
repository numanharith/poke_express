const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const pokemon = require('./models/pokemon');

app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {pokemons: pokemon});
})

app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {pokemon: pokemon[req.params.id]});
})

app.listen(port, () => {
    console.log('server.js is listening...');
})