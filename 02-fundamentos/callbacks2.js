let empleados = [
    { id: 1, nombre: "Carlos" }, { id: 2, nombre: "Alexis" }, { id: 3, nombre: "Siches" }
]


let salarios = [
    { id: 1, salario: 1000 }, { id: 2, salario: 2000 }
]


let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        callback(`no existe el empleado con el id ${id}`)

    } else {
        callback(null, empleadoDB)

    }

    // console.log(empleadoDB);
}


let getSalario = (empleado, callback) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id)

    if (!salarioDB) {
        callback(`no se encontro un salario para el empleado ${empleado.nombre}`)
    } else {
        callback(null, salarioDB)
    }


}



getEmpleado(3, (err, empleado) => {

    if (err) {
        return console.log(err);
    }



    //console.log(empleado);
    getSalario(empleado, (err, salario) => {
        if (err) {
            return console.log(err);
        }

        console.log(`nombre: ${empleado.nombre}, Salario: ${salario.salario} `)




    })




});


// getSalario ( getEmpleado(1, (err, empleado))  , (err, salario) )