let dia, mes, año;
let año2 = new Date();
let año_hoy = año2.getFullYear();

let dia_valido = false;
let mes_valido = false;
let año_valido = false;



do {

    dia = parseInt(prompt("Ingrese dia"));
    mes = parseInt(prompt("Ingrese mes"));
    año = parseInt(prompt("Ingrese año"));


    if (dia >=1 && dia <= 31){
        dia_valido = true;
    }
    if (mes >= 1 && mes <=12){
         mes_valido = true;
    }

    if (año >= 0 && año <= año_hoy){
         año_valido = true;
    }
    
} while (dia_valido == false ||  mes_valido == false || año_valido == false);


let suma1 = dia + mes +año;

let array = [];

while(suma1 > 0){
    let digito = suma1 % 10;
    array.push(digito);
    suma1 = Math.floor(suma1 / 10);
}

let suma_total = 0;

for (let i = 0; i < array.length ; i++){
    suma_total += array[i];    
}

document.getElementById('tarot').textContent += "Su numero tarot es " + suma_total;