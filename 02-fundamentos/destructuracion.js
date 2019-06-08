let deadpool = {
    nombre: "wade",
    apellido: "windston",
    poder: "Regeneracion",

    getNombre: function() {

        return `${this.nombre} ${this.apellido} - ${this.poder}`

    }

}

console.log(deadpool.getNombre());


// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poder = deadpool.poder


let { nombre: primernombre, apellido, poder } = deadpool


console.log(primernombre, apellido, poder);