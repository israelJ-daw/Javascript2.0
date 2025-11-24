// 1. Función que utiliza console.error correctamente
function daError() {
    console.error("Esto siempre da error"); // Muestra un mensaje de error en rojo en la consola
}
daError();


// 2. Función que utiliza console.warn correctamente
function daWarn() {
    console.warn("Esto es un WARN"); // Muestra un mensaje de advertencia en amarillo
}
daWarn();


// 3. Función que utiliza console.info correctamente
function daInfo() {
    console.info("Esto es info"); // Muestra un mensaje informativo en azul
}
daInfo();


// 4. Utiliza console.table
let tabla = [
    { nombre: "Israel", edad: 20 },
    { nombre: "Pepe", edad: 29 }
];
console.table(tabla); // Muestra un array u objeto como tabla en la consola


// 5. Utiliza console.group
console.group("Personas"); // Inicia un grupo en la consola
console.log("Nombre: Israel");
console.log("Edad: 21");
console.groupEnd(); // Cierra el grupo


// 6. Utiliza console.time
console.time('miLoop'); // Inicia un contador de tiempo

for (let i = 0; i < 1000000; i++) {
    // Simula un proceso pesado
}

console.timeEnd('miLoop'); // Termina el contador y muestra el tiempo transcurrido


// 7. Valida con assert si un número es positivo
let numero = 3;
console.assert(numero < 0, "El número no es positivo"); 
// console.assert solo muestra el mensaje si la condición es falsa


// 8. Utiliza console.count
console.count("Click"); // Cuenta cuántas veces se llama
console.count("Click");
console.count("Click");


// 9. Utiliza console.trace
function saludo() {
    console.trace("Se llamó a saludo"); // Muestra la pila de llamadas
}

function iniciar() {
    saludo();
}

iniciar();


// 10. Utiliza console.clear
console.log("Mensaje 1");
console.log("Mensaje 2");

console.clear(); // Limpia toda la consola, borra mensajes anteriores

console.log("Solo este mensaje aparece después de limpiar");
