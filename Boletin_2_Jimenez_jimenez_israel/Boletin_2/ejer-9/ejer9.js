let num = parseInt(prompt("introduce numeros (-1) para terminar"))
let suma = 0;
let contador = 0;
let mayor = num;
let menor = num;

while(num != -1){

    num = parseInt(prompt("introduce numeros (-1) para terminar"))

    if (num !=-1){
    
        contador++;
        suma += num;

        if (num > mayor){
            mayor = num;
        }

        if (num < menor){
            menor = num;
        }
    }
}    

let media = suma / contador;



document.getElementById('suma').textContent += "La suma de todos los numeros es " + suma;

document.getElementById('menor').textContent += "El numero menor es " + menor;

document.getElementById('mayor').textContent += "El numero mayor es " + mayor;

document.getElementById('media').textContent += "La media de los numeros es " + media 