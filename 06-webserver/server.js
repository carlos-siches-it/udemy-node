const express = require('express');
const app = express();
const hbs = require('hbs');
require("./hbs/helpers")


const port = process.env.PORT || 3000;


app.use( express.static(__dirname + "/public"));

//HBS
hbs.registerPartials(__dirname + "/views/partials")
app.set('view engine', 'hbs');




app.get('/', (req, res) => {
  //res.send('Hello World')
  res.render('home', {nombre: "Carlos" })
})

app.get('/about', (req, res) => {
  //res.send('Hello World')
  res.render('about')
})

// app.get('/', (req, res) => {

//     let usuario = 
//     {
//         nombre: "Carlos",
//         edad: 39,
//         url: req.url
    
//     }

//     res.send(usuario)
//   })


 
app.listen(port, ()=> {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})

