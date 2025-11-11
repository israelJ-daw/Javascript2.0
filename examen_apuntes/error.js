// 1. Captura una excepción utilizando try-catch
try {
    let a = 5;
    let b = 10;

    // Esto lanzará un error porque 'c' no está definida
    let suma = a + b + c;
    console.log("La suma es:" +  suma);
} catch (error) {
    console.log("ERROR!, salta porque no hay C: " + error.message);
}

// 2. Captura una excepción utilizando try-catch y finally
try {
    let a = 5;
    let b = 10;

    let suma = a + b + c; // c no está definida
    console.log("La suma es:" +  suma);
} catch (error) {
    console.log("ERROR!, salta porque no hay C: " + error.message);
} finally {
    console.log("Esto siempre se ejecuta, salte o no el error");
}

// 3. Lanza una excepción genérica
try {
    throw new Error("Este es un error genérico");
} catch (error) {
    console.error("Se capturó un error:", error.message);
}

// 4 y 5. Crea y lanza excepciones personalizadas según la lógica
function validarEdad(edad) {
    if (typeof edad !== "number") {
        throw new TypeError("La edad debe ser un número"); // 4. Excepción personalizada
    }
    if (edad < 0) {
        throw new RangeError("La edad no puede ser negativa"); // 4. Excepción personalizada
    }
    if (edad < 18) {
        throw new Error("Debes ser mayor de edad"); // 5. Excepción personalizada
    }
    return "Edad válida";
}

// Captura varias excepciones
try {
    console.log(validarEdad("hola"));  
} catch (error) {
    console.error("Error:", error.message);
}

try {
    console.log(validarEdad(-5)); 
} catch (error) {
    console.error("Error:", error.message);
}

try {
    console.log(validarEdad(16));  
} catch (error) {
    console.error("Error:", error.message);
}

console.log(validarEdad(25)); // Edad válida

// 6. Lanza varias excepciones según lógica definida
function procesarDato(dato) {
    if (typeof dato !== "number") throw new TypeError("El dato debe ser un número");
    if (dato < 0) throw new RangeError("El número no puede ser negativo");
    if (dato === 0) throw new Error("El número no puede ser cero");
    return `Número válido: ${dato}`;
}

// 7. Captura varias excepciones en un mismo try-catch
try {
    console.log(procesarDato(-5)); // Cambia el valor para probar distintos errores
} catch (err) {
    if (err instanceof TypeError) console.error("TypeError:", err.message);
    else if (err instanceof RangeError) console.error("RangeError:", err.message);
    else console.error("Error:", err.message);
}

// 8. Bucle que intenta transformar a float y captura errores
var valores = ["10.5", "abc", "42", "3.14xyz"];

for (var i = 0; i < valores.length; i++) {
    var n = parseFloat(valores[i]);
    if (isNaN(n)) {
        console.log("Error: '" + valores[i] + "' no se puede convertir");
    } else {
        console.log("Valor convertido: " + n);
    }
}

// 9. Función que verifica propiedad de un objeto y lanza excepción personalizada
function verificarPropiedad(objeto, propiedad) {
    if (!(propiedad in objeto)) {
        throw new Error("Propiedad '" + propiedad + "' no encontrada en el objeto");
    }
    return "Propiedad '" + propiedad + "' existe en el objeto";
}

var persona = { nombre: "irra", edad: 20 };

try {
    console.log(verificarPropiedad(persona, "nombre")); 
    console.log(verificarPropiedad(persona, "altura")); 
} catch (err) {
    console.error("Error:", err.message);
}

// 10. Función que realiza reintentos hasta un máximo de 10
function reintentar(funcion) {
    for (var i = 1; i <= 10; i++) {
        try {
            return funcion(); // Si funciona, devuelve el resultado
        } catch (err) {
            console.log("Intento " + i + " fallido: " + err.message);
        }
    }
    throw new Error("Se alcanzó el máximo de 10 reintentos");
}

// Ejemplo de uso de reintentar
var contador = 0;
function tarea() {
    contador++;
    if (contador <= 10) throw new Error("Fallo en la tarea");
    return "¡Tarea completada!";
}

try {
    console.log(reintentar(tarea));
} catch (err) {
    console.error(err.message);
}
