const optCrearBorrar = { descripcion:{ demand:true, alias:"d"}}
const optActualizar = { descripcion:{ demand:true, alias:"d"}, completado:{ demand:true, alias:"c", default:true }}



const argv = require("yargs")
                        .command("crear","crea un nuevo elemento a la lista de tareas",optCrearBorrar)
                        .command("actualizar","actualizar un elemento de la lista",optActualizar)
                        .command("borrar","elimina un registro de la lista",optCrearBorrar)
                        .help()
                        .argv




module.exports = 
{
    argv

}


