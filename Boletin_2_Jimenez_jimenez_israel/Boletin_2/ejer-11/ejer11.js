let mes;
do {
    
    mes = parseInt(prompt("Introduce mes en numero (1-12)"));

} while (mes <= 0 || mes >= 12);


switch (mes) {
    case 1:
            document.getElementById('mes').textContent += "El mes 1 es ENERO";
        break;
    case 2:
            document.getElementById('mes').textContent += "El mes 2 es FEBRERO";
        break;        
    case 3:
            document.getElementById('mes').textContent += "El mes 3 es MARZO";
        break;
    case 4:
            document.getElementById('mes').textContent += "El mes 4 es ABRIL";
        break;
     case 5:
            document.getElementById('mes').textContent += "El mes 5 es MAYO";
        break; 
    case 6:
            document.getElementById('mes').textContent += "El mes 6 es JUNIO";
        break;        
     case 7:
            document.getElementById('mes').textContent += "El mes 7 es JULIO";
        break;       

    case 8:
            document.getElementById('mes').textContent += "El mes 8 es AGOSTO";
        break;

    case 9:
            document.getElementById('mes').textContent += "El mes 9 es SEPTIEMBRE";
        break;

    case 10:
            document.getElementById('mes').textContent += "El mes 10 es OCTUBRE";
        break;

    case 11:
            document.getElementById('mes').textContent += "El mes 11 es NOVIEMBRE";
        break;

    case 12:
            document.getElementById('mes').textContent += "El mes 12 es DICIEMBRE";
        break;

    default:
            document.getElementById('mes').textContent += "No existe mas meses";
        break;
}