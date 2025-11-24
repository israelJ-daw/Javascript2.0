const fechaEntrada = new Date(2005, 0, 1); 
let sueldoBase = 1000;

let fechaHoy = new Date();
let añoEntrada = fechaEntrada.getFullYear();
let añoActual = fechaHoy.getFullYear();

while (añoEntrada + 3 <= añoActual) {
    sueldoBase += 100;
    añoEntrada += 3;
}

console.log("El sueldo base es: " + sueldoBase);
