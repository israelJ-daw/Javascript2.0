// ======================================================
// 1. Creación y Establecimiento
// Creamos un Map llamado 'traduciones' y agregamos claves y valores
// ======================================================
let traduciones = new Map();

traduciones.set("hello", "hola"); // clave string → valor string
traduciones.set("bye", "adios");

// ======================================================
// 2. Obtención y Tamaño
// Obtenemos el valor de la clave 'hello' y mostramos el tamaño del Map
// ======================================================
console.log(traduciones.get("hello")); // "hola"
console.log("Tamaño del Map:", traduciones.size); // 2

// ======================================================
// 3. Clave de Número
// Agregamos una clave numérica
// ======================================================
traduciones.set(1, "Primer nivel");
console.log(traduciones.get(1)); // "Primer nivel"

// ======================================================
// 4. Clave de Objeto
// Usamos un objeto como clave en el Map
// ======================================================
let config = { version: 1.0 };
traduciones.set(config, "Configuracion Global");
console.log(traduciones.get(config)); // "Configuracion Global"

// ======================================================
// 5. Iteración de Claves
// Imprimimos solo las claves del Map usando keys()
// ======================================================
console.log("Claves del Map:");
for (let clave of traduciones.keys()) {
  console.log(clave);
}

// ======================================================
// 6. Iteración de Pares
// Imprimimos los pares clave-valor del Map usando entries()
// ======================================================
console.log("Pares clave-valor del Map:");
for (let [clave, valor] of traduciones.entries()) {
  console.log("Clave:", clave, "Valor:", valor);
}

// ======================================================
// 7. Búsqueda Condicional
// Función que busca una clave y devuelve el valor o mensaje si no existe
// ======================================================
function buscarTraducion(clave) {
  if (traduciones.has(clave)) {
    console.log("Clave encontrada:", traduciones.get(clave));
  } else {
    console.log("Traducción no disponible");
  }
}

buscarTraducion(1); // ejemplo: busca la clave 1

// ======================================================
// 8. Conversión bidireccional
// Convertimos el Map a un array de pares y luego a un nuevo Map
// ======================================================
let arrayPares = [...traduciones]; // Map → Array
let nuevomap = new Map(arrayPares); // Array → Map

console.log("Nuevo Map desde Array de pares:");
for (let [clave, valor] of nuevomap) {
  console.log("Clave:", clave, "Valor:", valor);
}

// ======================================================
// 9. Map como Contador de Frecuencia
// Contamos cuántas veces aparece cada elemento de un array
// ======================================================
let frase = ["a", "b", "a", "c", "b", "a"];
let mapLetras = new Map();

for (let letra of frase) {
  if (mapLetras.has(letra)) {
    mapLetras.set(letra, mapLetras.get(letra) + 1);
  } else {
    mapLetras.set(letra, 1);
  }
}

console.log("Frecuencia de cada letra:");
for (let [clave, valor] of mapLetras) {
  console.log("Clave:", clave, "Valor:", valor);
}

// ======================================================
// 10. Simulación de Base de Datos
// Clase DBManager con Map privado, métodos para guardar, obtener y eliminar
// ======================================================
class DBManager {
  // Map privado para almacenar datos
  #mapdb = new Map();

  constructor(nombre) {
    this.nombre = nombre;
  }

  // Método para guardar datos
  guardar(id, dato) {
    if (this.#mapdb.has(id)) {
      console.log("El id", id, "ya existe");
    } else {
      this.#mapdb.set(id, dato);
      console.log("Guardado correctamente");
    }
  }

  // Método para obtener datos
  obtener(id) {
    if (this.#mapdb.has(id)) {
      return this.#mapdb.get(id); // devuelve el valor
    } else {
      console.log("No se encontró el id");
      return null;
    }
  }

  // Método para eliminar datos
  eliminar(id) {
    if (this.#mapdb.has(id)) {
      this.#mapdb.delete(id);
      console.log("El id", id, "se ha eliminado");
    } else {
      console.log("El id no existe");
    }
  }
}

// ======================================================
// Ejemplo de uso de DBManager
// ======================================================
const db = new DBManager("MiDB");

db.guardar(1, "Primer dato");
db.guardar(2, "Segundo dato");

console.log("Obteniendo id 1:", db.obtener(1)); // "Primer dato"
db.eliminar(1);
console.log("Obteniendo id 1:", db.obtener(1)); // null
