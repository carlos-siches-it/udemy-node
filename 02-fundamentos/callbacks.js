// setTimeout(function() {
//     console.log(`hola mundo`);
// }, 3000);


let getUsuariobyId = (id, callback) => {

    let usuario = { nombre: "Carlos", id }

    if (id == 20) {
        callback(`El usuario con id ${id} no existe en la BDs`)
    } else {
        callback(null, usuario);
    }






}


getUsuariobyId(1, (err, usuario) => {

    if (err) {
        return console.log(err);
    }

    console.log('usuario de base de datos', usuario);

})