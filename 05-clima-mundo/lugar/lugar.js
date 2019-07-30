const axios = require("axios")


const getLugarLatLng = async(dir) => 
{

    const encodedUrl = encodeURI(dir)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {
                    'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
                    'x-rapidapi-key': '38a73fb1b5msh2b2d1521eb912ddp1c92a4jsne66cd48c2e08'
                 }
      });

    const resp = await instance.get()

    if (resp.data.Results.length === 0)
    {
        throw new Error(`No hay resultados para ${dir}`)

    }

    const data = resp.data.Results[0]

    const direccion = data.name
    const lat = data.lat
    const lng = data.lon

    console.log(direccion, lat, lng)


    //   instance.get()
    //             .then(resp => {
    //                 console.log(resp.data.Results[0])
    //             } )
    //             .catch( err => {
    //                 console.log("Error!!!!", err)
    //             }  )

    return {
        direccion,
        lat,
        lng

    }



}


module.exports = {getLugarLatLng}



