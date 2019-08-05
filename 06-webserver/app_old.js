const http = require("http")

// http.createServer( (req, res ) => 
// {
//     res.write("Hola Mundo...")
//     res.end()



// }
// )
// .listen(8080)


http.createServer( (req, res ) => 
{
    res.writeHead(200, {"Content-Type": "application/json"})

    let usuario = 
    {
        nombre: "Carlos",
        edad: 39,
        url: req.url

    }

    res.write(JSON.stringify(usuario))



    res.end()



}
)
.listen(8080)

console.log("Escuchando el puerto 8080");



