let numero = parseInt(prompt("Introduce un número entero:"));

if (numero !== 0) {
    let valor = 1*numero
    document.getElementById('resultado').textContent = "El valor absoluto es: " + 1/valor;
} else {
    alert("El número no puede ser 0");

    
    do {
         numero = parseInt(prompt("Introduce un número distinto de 0:"));    

    } while (numero === 0);

    let valor = 1*numero
    document.getElementById('resultado').textContent = "El valor absoluto es: " + 1/valor;
};

 