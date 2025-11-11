// 1️⃣ Declaración e Inicialización
// Crear un array con los 12 meses
let array_mes = [ 
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

// Imprimir el mes en la posición 5 (junio, porque los índices empiezan en 0)
console.log("Mes en posición 5:", array_mes[5]);

// 2️⃣ Manipulación Extrema
// Añadir 'Diciembre Bis' al final
array_mes.push("Diciembre Bis");

// Eliminar 'Enero' del principio
array_mes.shift();

console.log("Array de meses modificado:", array_mes);

// 3️⃣ Búsqueda y Posición
let array_ciudades = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla'];

// Aquí simulamos que el usuario introduce la ciudad
let ciudad = "Madrid"; // Ejemplo, en navegador podrías usar prompt("Indica la ciudad")

// Buscar la posición con indexOf
let indice = array_ciudades.indexOf(ciudad);

if (indice !== -1) {
  console.log("La ciudad", ciudad, "se encuentra en la posición", indice);
} else {
  console.log("La ciudad", ciudad, "no existe en el array");
}

// 4️⃣ Transformación con map()
// Array de productos
let array_productos = [
  {nombre: 'Portátil', precio: 1200},
  {nombre: 'Ratón', precio: 25},
  {nombre: 'Monitor', precio: 300}
];

// Crear un array solo con los nombres de los productos
let nombresProductos = array_productos.map(function(producto) {
  return producto.nombre;
});

console.log("Nombres de productos:", nombresProductos);

// 5️⃣ Filtrado con filter()
// Crear un array con productos caros (precio > 100)
let arrayCaro = array_productos.filter(function(producto) {
  return producto.precio > 100;
});

console.log("Productos caros:", arrayCaro);

// 6️⃣ Composición con reduce()
// Sumar todos los precios de los productos
const total = array_productos.reduce(function(acumulador, producto) {
  return acumulador + producto.precio;
}, 0);

console.log("Suma total de precios:", total);

// 7️⃣ Concatenación y Ordenación
let frontend = ['HTML', 'CSS'];
let backend = ['Node', 'SQL'];

// Concatenar usando spread operator
let stackCompleto = [...frontend, ...backend];

// Añadir JavaScript
stackCompleto.push("JavaScript");

// Ordenar alfabéticamente
let ordenado = stackCompleto.sort();

console.log("Stack completo ordenado:", ordenado);

// 8️⃣ Matrices 2D y Desestructuración
let tablero = [
  ['x', 'o', 'x'],
  ['o', 'x', 'o'],
  ['x', 'o', 'x']
];

// Imprimir el elemento central
console.log("Elemento central:", tablero[1][1]);

// Desestructurar el primer array para obtener los dos primeros elementos
let [primero, segundo] = tablero[0];
console.log("Primer elemento de la primera fila:", primero);
console.log("Segundo elemento de la primera fila:", segundo);

// 9️⃣ find() y Objetos Complejos
// Encontrar el producto con nombre 'Portátil'
let portatil = array_productos.find(function(producto) {
  return producto.nombre === "Portátil";
});

console.log("Producto Portátil encontrado:", portatil);

// 🔟 Creación de una Función Universal
let arrayNotas = [10,3,2,5,6,8,9,10,2,3,6,2];

function procesarNotas(arrayNotas) {
  // Calcular la media usando reduce
  const suma = arrayNotas.reduce(function(acumulador, nota) {
    return acumulador + nota;
  }, 0);
  const media = suma / arrayNotas.length;

  // Filtrar notas aprobadas (>= 5)
  const aprobados = arrayNotas.filter(function(nota) {
    return nota >= 5;
  });

  // Verificar si hay algún 10
  const notas10 = arrayNotas.includes(10);

  // Devolver un objeto con las tres propiedades
  return {
    media: media,
    aprobados: aprobados,
    notas10: notas10
  };
}

// Llamar a la función y guardar el resultado
let resultado = procesarNotas(arrayNotas);
console.log("Resultado de procesarNotas:", resultado);
s