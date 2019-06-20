const {createFile, listNultiplicationTable} = require("./multiplicar/multiplicar")
const argv = require('./config/yargs').argv
const colors = require('colors')


let comando = argv._[0]

switch (comando) 
{
    case "listar": 
        //console.log(argv.base,argv.limit)


         listNultiplicationTable(argv.base,argv.limit)
             .then((result) => {
                 console.log(result.green) 
                })
             .catch((err) => {console.log(err)})   

    break

    case "crear":
        console.log(argv.limit)
        createFile(argv.base,argv.limit)
            .then((result) => {console.log(result)})
            .catch((err) => {console.log(err)})        
        
    break

    default:
        console.log("comando no reconocido");

}


//console.log(argv.base, argv.limit);









// let base = 21
// let maxNum = 13

//  createFile(base,maxNum)
//      .then((result) => {console.log(result)})
//      .catch((err) => {console.log(err)})




// const argv = require("yargs")
//                 .command("Listar", "Imprime en Consola la tabla de Multiplicar", 
//                 {  
//                     url: 
//                     {
//                         alias: "u", default: "yargs.com", demand: true


//                     }
//                 }


//                 )
//                 //.demandOption(['base'])
//                 .help()
//                 .argv



//let maxNum = 13


// let argv2 = process.argv
// let pbase =argv[2]

// console.log(argv)
// console.log(argv2)



// require('yargs') // eslint-disable-line
//   .command('serve [port]', 'start the server', (yargs) => {
//     yargs
//       .positional('port', {
//         describe: 'port to bind on',
//         default: 5000
//       })
//   }, (argv) => {
//     if (argv.verbose) console.info(`start server on :${argv.port}`)
//     serve(argv.port)
//   })
//   .option('verbose', {
//     alias: 'v',
//     default: false
//   })
//   .argv



//  createFile(base,maxNum)
//      .then((result) => {console.log(result)})
//      .catch((err) => {console.log(err)})











