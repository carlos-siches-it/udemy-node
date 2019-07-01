
const argv = require("./config/yargs").argv
const to_do = require("./to-do/to-do")
const colors = require("colors")

let comando = argv._[0]



switch (comando) {
    case "crear":
        let task = to_do.crear(argv.descripcion)
        console.log(task);
        break;

    case "listar":
        let list = to_do.getListado()

        console.log(list);

        for (let iterator of list) {
            console.log("=============== TO DO =====================".green)
            console.log(iterator.description)
            console.log("Estado: ", iterator.completado)
            console.log("===========================================".green)
        }

        break



    case "actualizar":
        let completado = to_do.actualizar(argv.descripcion, argv.completado)
        console.log(completado);
        break;        

    case "borrar":
            let borrado = to_do.borrar(argv.descripcion)
            console.log(borrado);

            break;              


    default:
        console.log("comando no reconocido");
        break;
}


//node app crear -d "pasear el perro"
//node app actualizar -d "pasear el perro" -c true