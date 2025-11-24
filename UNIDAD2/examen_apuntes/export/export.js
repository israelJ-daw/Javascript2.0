// 1. Exporta una función
function saludar(nombre) {
    console.log("Hola", nombre, "¿cómo estás?");
}

// 2. Exporta una constante
const PI = 3.14;

// 3. Exporta una clase
class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log("Hola eres", this.nombre, "y tienes", this.edad, "años");
    }
}

// 7. Exporta una función, constante y clase por defecto (CommonJS no permite default, se usa todo en un objeto)
function saludar2(nombre){
    console.log("Esto es saludar a", nombre);
}

const PI2 = 3.24;

class Coche{
    constructor(marca){
        this.marca = marca;
    }

    quemarca(){
        console.log("El coche es de la marca", this.marca);
    }
}

// Exportamos TODO junto usando CommonJS
module.exports = { saludar, PI, Persona, saludar2, PI2, Coche };



// export2/export.js
function hola(nombre) {
    console.log("Hola desde export2,", nombre);
}

const CONSTANTE2 = 42;

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    hablar() {
        console.log(this.nombre, "dice: ¡Hola!");
    }
}

module.exports = { hola, CONSTANTE2, Animal };
