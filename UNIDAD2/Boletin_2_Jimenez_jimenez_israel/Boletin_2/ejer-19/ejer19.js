let min = 1;
let max = 3;
let numero = 0

let bolita = Math.floor(Math.random() * (max - min + 1)) + min;

while (numero < 1 || numero >3){
 numero = parseInt(prompt("Introduce el numero donde crees que esta la bolita 1, 2 o 3"));
}
if (numero == bolita){
    alert ("BIIENN, HAS ACERTADO");
}

else {
    alert("ohh :( la bolita estaba en el numero " + bolita);
}