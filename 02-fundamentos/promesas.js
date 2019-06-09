let empleados = [
    { id: 1, nombre: "Carlos" }, { id: 2, nombre: "Alexis" }, { id: 3, nombre: "Siches" }
]


let salarios = [
    { id: 1, salario: 1000 }, { id: 2, salario: 2000 }
]


let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => empleado.id === id)

        if (!empleadoDB) {
            reject(`no existe el empleado con el id ${id}`)

        } else {
            resolve(empleadoDB)

        }

    })

    // console.log(empleadoDB);
}


let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id)

        if (!salarioDB) {
            reject(`no se encontro un salario para el empleado ${empleado.nombre}`)
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            })
        }
    })




}



// getEmpleado(10).then(
//     empleado => {
//         //console.log(`empleado de BDs`, empleado)

//         getSalario(empleado).then(salario => {
//                 console.log(`empleado ${empleado.nombre}, salario ${salario.salario}`)

//             },
//             (err) => { console.log(err) }
//         )


//     },
//     (err) => { console.log(err) }
// )

getEmpleado(12).then(empleado => {  
    return getSalario(empleado);
})
.then(resp => {
    console.log(resp)
    //console.log(`el salario de ${empleado.nombre} es de ${resp.salario}`)
})
.catch(err => {
    console.log(err)
})