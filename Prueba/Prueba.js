
let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
    
    saludar: function() {
        console.log("Hola, me llamo " + this.nombre);
    }
};

let persona2 = {
    nombre: "Juan",
    edad: 24,
    ciudad: "Madrid"
};


let sonIguales = JSON.stringify(persona) === JSON.stringify(persona2);
console.log(sonIguales); // true o false
