// 4. Importa una función
const { saludar } = require("./export.js");
saludar("Ana");

// 5. Importa una constante
const { PI } = require("./export.js");
console.log(PI);

// 6. Importa una clase
const { Persona } = require("./export.js");
const persona1 = new Persona("Pepe", 32);
persona1.saludar();

// 8. Importa función, constante y clase exportadas juntas
const { saludar2, PI2, Coche } = require("./export.js");
saludar2("Alfredo");
console.log(PI2);
const coche1 = new Coche("Toyota");
coche1.quemarca();
