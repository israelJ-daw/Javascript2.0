let segundos = 0;


while (segundos <= 0){
    segundos = parseInt(prompt("Introduce un tiempo en segundo mayor que 0"));

}

segundos2 = segundos;

let horas = Math.floor (segundos / 3600);
segundos = segundos % 3600;
let min = Math.floor (segundos / 60);
segundos = segundos % 60;
let segs = segundos % 60;

document.getElementById('tiempo').textContent += "Los segundos " + segundos2 + " Es:" ;

document.getElementById('hora').textContent += "Horas: " + horas;
document.getElementById('minutos').textContent += "Minutos: " + min;
document.getElementById('segundos').textContent += "Segundos: " + segs;
    