const lugar = require("./lugar/lugar")
const clima = require("./clima/clima")


const argv = require("yargs").options({
    direccion: {
        alias: "d", desc: "Direccion de la ciudad", demand: true
    }
}).argv


// clima.getClima("-5.710000", "-79.279999")
//             .then( console.log )

// // lugar.getLugarLatLng(argv.direccion)
// //      .then( resp => {console.log(resp)} )

//lugar.getLugarLatLng(argv.direccion).then( resp => {console.log(resp)} )

// lugar.getLugarLatLng(argv.direccion)
//     .then( console.log )
//     .catch(console.log)


// clima.getClima("-5.710000", "-79.279999")
//             .then( console.log )

//console.log(argv.direccion)

const getInfo = async(direccion) => 
{


    try 
    {

        const coords = await lugar.getLugarLatLng(direccion)
        const temp = await clima.getClima(coords.lat, coords.lng)

        return `El clima de ${coords.direccion} es de ${temp}`
    
        
    } catch (error) {
        
        return `No se pudo determinar el clima de ${direccion}`
    
    }

    // var idireccion, ilat, ilon

    // lugar.getLugarLatLng(direccion)
    //      .then(resp => {
    //          idireccion = resp.direccion
    //          ilat = resp.lat
    //          ilon = resp.lng

    //      } )
    
    // if (idireccion.length === 0 )
    //    console.log(`No se encuentra la direccion para ${direccion}`)  
    
    




    //El clima de xxxx es de xxxx

}


getInfo(argv.direccion)
.then(console.log)
.catch(console.log)




