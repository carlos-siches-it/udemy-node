// // function sumar(a, b) {
// //     return a + b;
// // }



// // let sumar = (a, b) => {
// //     return a + b;
// // }

// let sumar = (a, b) => a + b

// console.log(sumar(2, 3));


// // function saludar() {
// //     return "hola mundo"
// // }


// let saludar = () => "hola mundo";

// console.log(saludar());



let deadpool = {
    nombre: "wade",
    apellido: "windston",
    poder: "Regeneracion",

    getNombre: function() {
        return `${this.nombre} ${this.apellido} - ${this.poder}`
    }

}

console.log(deadpool.getNombre());