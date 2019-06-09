/**
     Async Await
*/


// let getNombre = async() => 
// {
//     //undefined.name
//     //throw new Error("No existe un nombre de usuario")
//     return "Carlos"
// }



// let getNombre = () => {
//     return new Promise( (resolve, reject) => {
//         resolve("Fernando")
//     } )
// }


 let getNombre = () => {
     return new Promise( (resolve, reject) => {

        setTimeout(() => {
            resolve("Carlos")   
        }, 3000 );

         
     } )
 }

let saludo = async () => 
{

    let nombre = await getNombre();

    return `Hola ${nombre}`

}


saludo()
.then(mensaje => { console.log(mensaje) } )



// getNombre()
// .then(nombre => {console.log(nombre)})
// .catch(e => {console.log("error en Async", e)} )



//console.log(getNombre());