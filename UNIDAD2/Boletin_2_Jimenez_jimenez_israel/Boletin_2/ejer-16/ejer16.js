let numero =  0;


while (numero <= 0){

    numero = parseInt(prompt("Introduce numero mayor que cero"));
    
}


let numero2 = numero;
let array = [];

let cociente;
while (numero > 0){
    cociente = numero % 2;    

    numero = Math.floor (numero / 2);

    array.push(cociente);

}

array.reverse();
array = array.join("");

document.getElementById('cociente').textContent += "El numero " + numero2 + " En binario es " + array;