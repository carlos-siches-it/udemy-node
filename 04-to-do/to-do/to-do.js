const fs = require("fs")

let todolist = []

const guardarDB = () => 
{
    let data = JSON.stringify(todolist)
    fs.writeFile("db/data.json", data, (err) => {
        if (err) {throw new Error("no se pudo grabar", err) }
    } )
}


const GetDB = () => 
{

    todolist = require("../db/data.json")



    // let data = JSON.stringify(todolist)
    // fs.writeFile("db/data.json", data, (err) => {
    //     if (err) {throw new Error("no se pudo grabar", err) }
    // } )
}


const crear = (description) => 
{

    GetDB()

    let task = { description, completado:false }
    todolist.push(task)
    guardarDB()
    return todolist
}

const getListado = () => {
    GetDB()
    return todolist

}

const actualizar = (pdescription, completed = true) => 
{
    GetDB()

    console.log(`Description: ${pdescription}`);

    //let index = todolist.findIndex( task => task.description === pdescription)

    

    // let index = todolist.findIndex( task => { 
    //     return task.description === pdescription
    // }
    // )    

    // let task = todolist.find(ptask => {

    //     return ptask.description === pdescription

    // })

    let index = todolist.findIndex( task => 
        {

            return task.description === pdescription

    } )


    console.log(todolist);



    console.log(`El indice es ${index}`);

    if (index >= 0 )
    {
        todolist[index].completado = completed
        guardarDB()

        return true

    }else 
    {
        return false

    }

}


const borrar = (description) => 
{
    GetDB()

    let newList = todolist.filter( task => {

        return task.description !== description

    })


    if (newList.length === todolist.length )
    {
        return false

    }else
    {

        todolist = newList
        guardarDB()

        return true

    }

} 



module.exports = 
{
    crear,actualizar,getListado,borrar

}




