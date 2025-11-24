// =======================================
// EJEMPLO COMPLETO DE OBJETOS EN JAVASCRIPT
// =======================================

// 1️⃣ Crear un objeto con 3 propiedades
let persona = {
    nombre : "israel",
    apellido : "jimenez",
    edad : 20,

    caminar(){
        console.log(this.nombre + " va caminando") // 5️⃣ Método agregado
    }
}

// 2️⃣ Acceder y mostrar sus valores
console.log(persona.coche); // Todavía no existe, pero luego la agregamos

// 3️⃣ Agregar una nueva propiedad
persona["coche"] = "seat";
console.log(persona.coche); // Seat

// 4️⃣ Eliminar una de las propiedades originales
delete persona.apellido; // Se elimina "apellido"

// 5️⃣ Invocar la función (método) que creamos
persona.caminar(); // Israel va caminando

// 6️⃣ Iterar las propiedades del objeto (excepto funciones)
for (let clave in persona) {
   if (typeof persona[clave] !== "function") {
        console.log(clave + " :: " + persona[clave]);
    }
}

// 7️⃣ Crear un objeto anidado
let persona2 = {
    nombre : "pepe",
    apellido : "martinez",
    edad : 20,

    direccion : {               // Objeto anidado
        calle : "c// a.a.v.v esperanza sur",
        numero : 4,
        donde (){                // Método dentro del objeto anidado
            console.log(" yo vivo en la calle "+ this.calle + "  y el numero es " + this.numero)
        }
    }
}

// 8️⃣ Acceder y mostrar valores de propiedades anidadas
console.log(persona2.direccion.calle); // Muestra la calle
persona2.direccion.donde(); // Muestra la dirección completa usando el método

// 9️⃣ Comprobar si los dos objetos son iguales
console.log(persona == persona2); // false → Son objetos distintos

// 🔟 Comprobar si propiedades específicas son iguales
console.log(persona.nombre == persona2.nombre); // false
console.log(persona.edad == persona2.edad);     // true
