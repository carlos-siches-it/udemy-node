
// function getEmpleado(){
//     let Empleado = 
//     {
//         Name: "Carlos", Company: "xagent", salary: 2000, title: "Developer"
//     }




//     return Empleado

// }

let getEmplyee = async() => 
{
    let Empleado =
    {
        Name: "Carlos", Company: "xagent", salary: 2000, title: "Developer"
    }

    return (Empleado)

}

let getInformation = async() =>
{

    let resp = await getEmplyee()

    console.log(resp);

}


console.log(getInformation()); 











