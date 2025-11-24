let precio = parseInt(prompt("introduce el precio del producto"));
let pagado = parseInt(prompt("introduce la cantidad pagada"));

if (pagado > precio){

    document.getElementById('mensaje').textContent = "Su producto ya ha sido pagado";
    let cambio = pagado - precio;
    document.getElementById('mensaje').textContent += " y su cambio es " + cambio + " euros";

    while (cambio > 0){
        if (cambio >= 500){
            cambio -= 500;
                document.getElementById('mensaje').innerHTML += "<br>1 billete de 500 euros";
        }   else if (cambio >= 200){  
            cambio -= 200;
                document.getElementById('mensaje').innerHTML += "<br>1 billete de 200 euros";
        }   else if (cambio >= 100){
            cambio -= 100;
                document.getElementById('mensaje').innerHTML += "<br>1 billete de 100 euros";
        }   else if (cambio >= 50){
            cambio -= 50;
                document.getElementById('mensaje').innerHTML += "<br>1 billete de 50 euros";
        }   else if (cambio >= 20){
            cambio -= 20;
                document.getElementById('mensaje').innerHTML += "<br>1 billete de 20 euros";
        }   else if (cambio >= 10){
            cambio -= 10;
                document.getElementById('mensaje').innerHTML += "<br>1 billete de 10 euros";
        }   else if (cambio >= 5){  
            cambio -= 5;
                document.getElementById('mensaje').innerHTML += "<br>1 billete de 5 euros";
        }   else if (cambio >= 2){
            cambio -= 2;
                document.getElementById('mensaje').innerHTML += "<br>1 moneda de 2 euros";
        }   else if (cambio >= 1){
            cambio -= 1;
                document.getElementById('mensaje').innerHTML += "<br>1 moneda de 1 euro";
    }
}

} else{
    let deuda = precio - pagado;
    document.getElementById('mensaje').textContent = "Le falta por pagar " + deuda + " euros";
}
