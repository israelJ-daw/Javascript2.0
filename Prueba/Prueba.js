
function pedirNumero(mensaje) {
    let numero;
    let intentos = 0;

    while (true) { 
      let a = prompt(mensaje);
        numero = parseFloat(a);
        intentos++;

        if (!isNaN(numero)) {
            return numero; 
        } else {
            if (intentos >= 3) {
                mensaje = "¿eres gilipollas?"; 

            }
        }
    }
}

let n1 = pedirNumero("Escriba n1");
let n2 = pedirNumero("Escriba n2");
let n3 = pedirNumero("Escriba n3");
let n4 = pedirNumero("Escriba n4");

let valor = prompt("Que quieres hacer?, 1:suma, 2:resta, 3:multi, 4:divi");
let valor2 = parseInt(valor);

switch (valor2) {
    case 1:
        let total = n1+n2+n3+n4;
        alert ("su suma es: "+ total);
        break;
    case 2:
        let total2 = n1-n2-n3-n4;
        alert ("su resta es: "+ total2);
        break;
    
    case 3:
        let total3 = n1*n2*n3*n4;
        alert ("su multiplicacion es: "+ total3);
        break;
    case 4:
        let total4 = (n1 + n2 + n3 + n4) / 4;
        alert ("su division es: "+ total4);
        break;    

    default:
        alert("Opcion no valida");
        break;
}
