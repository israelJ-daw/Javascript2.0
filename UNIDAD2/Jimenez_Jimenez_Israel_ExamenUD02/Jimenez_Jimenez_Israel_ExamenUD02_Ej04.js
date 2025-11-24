let empleados = new Map([
    ["A001", { nombre: "Aritz", salario: 3000 }],
    ["B002", { nombre: "Antonio", salario: 2500 }],
    ["C003", { nombre: "Juan", salario: 3200 }]
]);

empleados.forEach(empleado => {
    
    if (empleado.salario >= 3000){
        empleado.salario += empleado.salario *  0.1
    }
});


console.log("Pares clave-valor del Map: entries");
for (let [clave, valor] of empleados.entries()) {
  console.log("Clave:", clave, "Valor:", valor);
}


console.log("-----------------------------------------------------------------------")

console.log("imprimir el array ")
for (let [clave, valor] of empleados) {
  console.log("Clave:", clave, "Valor:", valor);
}


