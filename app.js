let hbs = require('hbs');
const express = require('express')
require('dotenv').config();


const app = express()
const port = process.env.PORT;


//Handlears
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')




//SERVIR CONTENIDO ESTATICO 
app.use(express.static('public'));

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso node'
    });

});

app.get('/generic', (req, res) => {

    res.render('generic', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso node'
    });



});

app.get('/elements', (req, res) => {

    res.render('elements', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso node'
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
});

app.listen(port, () => {
    console.log(`Example app listenat port ${port}`);
});

