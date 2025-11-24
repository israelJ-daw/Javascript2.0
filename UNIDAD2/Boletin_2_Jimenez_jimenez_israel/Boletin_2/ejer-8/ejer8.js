let num = parseInt(prompt("introduce un número:"));

let suma = 0;

for (let i = 1; i <= num; i++) {

    suma = suma + i;
    document.getElementById('mensaje').innerHTML += "<br>" + i;


    document.getElementById('cuadrado').innerHTML += "<br>" + i**2;


    document.getElementById('cubo').innerHTML += "<br>" + i**3;
    
}

document.getElementById('suma').textContent = "La suma total es: " + suma;