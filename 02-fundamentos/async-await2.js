let empleados = [
    { id: 1, nombre: "Carlos" }, { id: 2, nombre: "Alexis" }, { id: 3, nombre: "Siches" }
]


let salarios = [
    { id: 1, salario: 1000 }, { id: 2, salario: 2000 }
]



let getEmpleado = async (id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)
    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID ${id}`)
    } else {
        return empleadoDB
    }
}


let getSalario = async (empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id)

    if (!salarioDB) {
        throw new Error(`no se encontro un salario para el empleado ${empleado.nombre}`)
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        }
    }
}



// let getEmpleado = (id) => {

//     return new Promise((resolve, reject) => {

//         let empleadoDB = empleados.find(empleado => empleado.id === id)

//         if (!empleadoDB) {
//             reject(`no existe el empleado con el id ${id}`)

//         } else {
//             resolve(empleadoDB)

//         }

//     })

//     // console.log(empleadoDB);
// }


// let getSalario = (empleado) => {

//     return new Promise((resolve, reject) => {
//         let salarioDB = salarios.find(salario => salario.id === empleado.id)

//         if (!salarioDB) {
//             reject(`no se encontro un salario para el empleado ${empleado.nombre}`)
//         } else {
//             resolve({
//                 nombre: empleado.nombre,
//                 salario: salarioDB.salario,
//                 id: empleado.id
//             })
//         }
//     })
// }

let getInformacion = async (id) => {

    let empleado = await getEmpleado(id)
    let resp = await getSalario(empleado)

    return `${resp.nombre} tiene un salario de ${resp.salario} `

    console.log(resp)

}


getInformacion(1)
.then(mensaje => console.log(mensaje))
.catch(e=> console.log(e) )
