let numero = parseInt(prompt("Introduce un número"));

function factorial(numero) {
    let resultado = 1; 

    for (let i = 1; i <= numero; i++) {
        resultado *= i; 
    }

    return resultado;
}

alert(factorial(numero));
