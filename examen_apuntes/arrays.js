// 1. Crea un array que almacene cinco animales
let array_ani = ["perro", "gato", "pez", "leon", "pato"];
console.log("Array inicial:", array_ani);

// 2. Añade dos más. Uno al principio y otro al final
array_ani.unshift("raton"); // agrega al principio
array_ani.push("paloma");   // agrega al final
console.log("Después de agregar dos animales:", array_ani);

// 3. Elimina el que se encuentra en tercera posición (posición 2)
array_ani.splice(3, 1); // elimina 1 elemento en la posición 3
console.log("Después de eliminar la tercera posición:", array_ani);

// 4. Crea un Set que almacene cinco libros
let setlibro = new Set(["libro1", "libro2", "libro3", "libro4", "libro5"]);
console.log("Set inicial de libros:", setlibro);

// 5. Añade dos más. Uno de ellos repetido
setlibro.add("libro2"); // repetido, no se duplica
setlibro.add("libro6"); // nuevo libro
console.log("Después de agregar libros:", setlibro);

// 6. Elimina uno concreto a tu elección
setlibro.delete("libro3");
console.log("Después de eliminar libro3:", setlibro);

// 7. Crea un Map que asocie el número del mes a su nombre
let mapmes = new Map([
    [1, "enero"],
    [2, "febrero"],
    [3, "marzo"],
    [4, "abril"],   
    [5, "mayo"],
    [6, "junio"],
    [7, "julio"],
    [8, "agosto"],
    [9, "septiembre"],
    [10, "octubre"],
    [11, "noviembre"],
    [12, "diciembre"]
]);
console.log("Mapa de meses:", mapmes);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (mapmes.has(5)) {
    console.log("El mes número 5 es:", mapmes.get(5));
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
mapmes.set(13, ["junio", "julio", "agosto"]);
console.log("Meses de verano (clave 13):", mapmes.get(13));

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let miarrayrepetido = ["hola", "hola", "como", "como", "estas"];
let miset = new Set(miarrayrepetido); // convierte array en Set (sin duplicados)
let mimap = new Map();
mimap.set(1, miset); // almacena el Set en un Map con clave 1
console.log("Map con Set dentro:", mimap);
