// 10. Importa función, constante y clase desde un directorio diferente
const { hola, CONSTANTE2, Animal } = require("./export2/export.js");

hola("Paco");        // Hola desde export2, Paco
console.log(CONSTANTE2); // 42
const animal1 = new Animal("Perro");
animal1.hablar();    // Perro dice: ¡Hola!
