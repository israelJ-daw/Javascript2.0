let dia1 = 0;
let mes1 = 0;
let año1 = -1;

while (dia1 <= 0 || dia1 > 31) {
  dia1 = parseInt(prompt("Introduce dia de fecha 1"));
}
while (mes1 <= 0 || mes1 > 12) {
  mes1 = parseInt(prompt("Introduce mes de fecha 1"));
}

while (año1 < 0) {
  año1 = parseInt(prompt("Introduce año de fecha 1"));
}

alert("Fecha 1 Guardada");

let dia2 = 0 ;
let mes2 = 0;
let año2 = -1;

while (dia2 <= 0 || dia2 > 31) {
  dia2 = parseInt(prompt("Introduce dia de fecha 2"));
}
while (mes2 <= 0 || mes2 > 12) {
  mes2 = parseInt(prompt("Introduce mes de fecha 2"));
}

while (año2 < 0) {
  año2 = parseInt(prompt("Introduce año de fecha 2"));
}

alert("Fecha 2 Guardada");


let fecha1 = new Date(año1, mes1 - 1, dia1);
let fecha2 = new Date(año2, mes2 - 1, dia2);



if (fecha1 > fecha2){
    alert("La fecha 1 Es mas GRANDE que la fecha 2");

}
else if (fecha2 > fecha1){
    alert ("La fecha 2  es mas grande que la fecha 1");
}

else {
    alert ("Las fechas Son iguales");
} 