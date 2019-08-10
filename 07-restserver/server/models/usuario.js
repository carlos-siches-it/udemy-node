const mongoose = require('mongoose');
const uniquevalidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema


let rolesValidos = {
    values: ["ADMIN_ROLE", "USER_ROLE"], message: "{VALUE} no es un rol Valido"
}

let usuarioSchema = new Schema(
    {
        nombre: {
            type: String, required: [true, "El Nombre es Necesario"]
        },
        email: {
            type: String, required: [true, "El Correo es Necesario"], index: {unique: true, dropDups: true}
        },
        password: {
            type: String, required: [true, "El Pass es Necesario"]
        },
        img: {
            type: String, required: false
        },
        role: {
            type: String, required: [true, "El Pass es Necesario"], default: "USER_ROLE", enum: rolesValidos
        },
        estado: {
            type: Boolean, required: [true, "Est es Necesario"], default: true
        },
        google: {
            type: Boolean, required: [true, "Goog es Necesario"], default: false
        }

})


//no retornar password desde el schema
usuarioSchema.methods.toJSON = function () 
{
    let user = this
    let userObject = user.toObject()
    delete userObject.password

    return userObject

}

usuarioSchema.plugin(uniquevalidator, {message: "{PATH} debe de ser unico"})

module.exports =mongoose.model("Usuario", usuarioSchema)




