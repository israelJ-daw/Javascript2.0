do {
    
    var hora = parseInt(prompt("Introduce una hora (0-23): "));

} while (hora < 0  || hora > 23);

do {
    
    var min = parseInt(prompt("Introduce minuto (0-59): "));

} while (min < 0  || min > 59);

if (hora == 7){

    if (min >= 30) {
        document.getElementById('mensaje').textContent = "BUENOS DIAS";
    } else {   document.getElementById('mensaje').textContent = "BUENAS NOCHES";  }
}

if (hora >= 8 && hora < 14) {

    document.getElementById('mensaje').textContent = "BUENOS DIAS";
}

if (hora >=14){
    if (min >= 1) {
        document.getElementById('mensaje').textContent = "BUENAS TARDES";
    } else {   document.getElementById('mensaje').textContent = "BUENAS DIAS";  }
}

if (hora >=15 && hora < 20){

    document.getElementById('mensaje').textContent = "BUENAS TARDES";

}

if (hora == 20){
    
    if (min >= 1 && min <= 30) {
        document.getElementById('mensaje').textContent = "BUENAS TARDES";
    } else {   document.getElementById('mensaje').textContent = "BUENAS NOCHES";  }
}

if (hora >20 || hora < 7){

    document.getElementById('mensaje').textContent = "BUENAS NOCHES";
}

