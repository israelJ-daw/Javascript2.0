// =======================
// Nivel Básico
// =======================

// 1. Creación con Duplicados
let array = [101, 105, 101, 103, 105];
let idsUnicos = new Set(array);

console.log("1. Set con duplicados eliminados:", idsUnicos);
console.log("   Tamaño del Set:", idsUnicos.size);

// 2. Adición y Comprobación
idsUnicos.add(107); // Añadimos un nuevo número
idsUnicos.add(105); // Intentamos añadir un número que ya existe

console.log("\n2. Tamaño después de añadir 107 y 105:", idsUnicos.size);

// =======================
// Nivel Intermedio
// =======================

// 3. Existencia
console.log("\n3. Existe el ID 103?", idsUnicos.has(103));
console.log("   Existe el ID 999?", idsUnicos.has(999));

// 4. Eliminación Condicional
if (idsUnicos.has(107)) {
    console.log("\n4. Eliminando el ID 107...");
    idsUnicos.delete(107);
} else {
    console.log("   ID 107 no existe");
}

console.log("   Set después de eliminación:", idsUnicos);

// 5. Conversión a Array
let arrayIds = [...idsUnicos];
console.log("\n5. Array de IDs únicos:", arrayIds);

// 6. Iteración
console.log("\n6. Iterando sobre idsUnicos:");
for (let numero of idsUnicos) {
    console.log("   El ID encontrado es:", numero);
}

// =======================
// Nivel Avanzado
// =======================

// 7. Intersección de Conjuntos
let desarrolladores = new Set(['Juan', 'Ana', 'Carlos']);
let diseñadores = new Set(['Ana', 'Pedro', 'Laura']);

// Forma 1: usando doble bucle (for...of dentro de for...of)
let comunes1 = new Set();
for (let des of desarrolladores) {
    for (let dis of diseñadores) {
        if (des === dis) {
            comunes1.add(des);
        }
    }
}
console.log("\n7.1 Nombres comunes (intersección) - forma 1:", comunes1);

// Forma 2: usando has() (más eficiente)
let comunes2 = new Set();
for (let des of desarrolladores) {
    if (diseñadores.has(des)) {
        comunes2.add(des);
    }
}
console.log("7.2 Nombres comunes (intersección) - forma 2:", comunes2);

// 8. Diferencia de Conjuntos
let soloDesarrolladores = new Set();
for (let des of desarrolladores) {
    if (!diseñadores.has(des)) {
        soloDesarrolladores.add(des);
    }
}
console.log("\n8. Solo desarrolladores (diferencia):", soloDesarrolladores);

// 9. Uso de Objetos en un Set
let puntos = new Set();
let punto1 = {x: 10, y: 20};
let punto2 = {x: 10, y: 20};

puntos.add(punto1);
puntos.add(punto2); // Aunque parecen iguales, son objetos distintos

console.log("\n9. Set de puntos:", puntos);
console.log("   Tamaño del Set de puntos:", puntos.size);
// Explicación: Los objetos son referencias únicas, aunque tengan los mismos valores.

// 10. Normalización de Tags
const tags = ['js', 'JS', 'javascript', 'Js'];

function normalizarTags(array) {
    const setTags = new Set();
    for (const tag of array) {
        setTags.add(tag.toLowerCase());
    }
    return setTags;
}

const resultado = normalizarTags(tags);
console.log("\n10. Tags normalizados y únicos:", resultado);
