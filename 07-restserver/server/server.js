require("./config/config")
const express = require('express')
const bodyParser = require("body-parser")
const mongoose = require('mongoose');
 

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(require("./routes/usuario"))


mongoose.connect('mongodb://localhost:27017/cafe', {useNewUrlParser: true}, (err, res)=>{
    if (err) throw err
    
    console.log("Database on line")

});

 
app.listen(process.env.PORT, () => {
    console.log("Escuchando puerto: ", process.env.PORT);
})
