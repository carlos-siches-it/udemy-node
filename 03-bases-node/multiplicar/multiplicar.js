const fs = require("fs")


let listNultiplicationTable = (base, maxNum = 10) => 
{

    console.log(`this is the multiplicar class`);

    return new Promise((resolve, reject) => {
        /*Validation*/

        if (!Number(base) || !Number(maxNum)){
            reject("Base and limit have to be Numbers")
            return 
        }


        

        let DataOutput = "test"

        for (let index = 1; index <= maxNum; index++){
            let result = base * index
            DataOutput += `${base} * ${index} = ${result} \n`
1         
        }

        resolve(DataOutput)




    } )





}


let createFile = (base, maxNum) => 
{
    return new Promise((resolve, reject) => 
    {

        if (!Number(base)){ 
            reject("El valor tiene que ser numerico")
            return 
        }




        let Data =""
        for (let index = 1; index <= maxNum; index++) {
            let result = base * index
            Data += `${base} * ${index} = ${result} \n` 
        }

        fs.writeFile(`Tablas/Tabla-${base}`, Data, 'utf8', err => 
        {

            if (err) reject(err) 
            else {
                resolve(` File was created: Tabla-${base.green}`)

                //resolve(`Tabla-${base} has been created`)
        }
        } )

    }

    )

}


module.exports =
{
    createFile,
    listNultiplicationTable

}


