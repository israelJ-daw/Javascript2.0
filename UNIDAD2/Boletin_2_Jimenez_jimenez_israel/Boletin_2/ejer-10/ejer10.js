
opcion = 0;

while (opcion != 6){
    opcion = parseInt(prompt("Eligue moneda a cambiar: 1.) Dolar 2.) libras 3.) Yenes 4.)Franco Suizo 5.) Corona Noruega 6. Salir"));

    switch (opcion) {
    case 1:
        alert("Vas a cambiar de euros a dolares");

        var euros = parseFloat(prompt("Ingrese Cantidad de euros"));

        let dolar = euros * 1.16;

        alert("Su cambio de euros a dolar es " + dolar);

        break;

    case 2:

        alert ("Vas a cambiar de euros a libras");

        var euros = parseFloat(prompt("Ingrese Cantidad de euros"));

        let libras = euros * 0.87;

        alert("Su cambio de euros a dolar es " + libras);

        break;

    case 3:

        alert ("Vas a cambiar de euros a yenes");

        var euros = parseFloat(prompt("Ingrese Cantidad de euros"));

        let yenes = euros * 176.12;

        alert("Su cambio de euros a dolar es " + yenes);

        break;
    
    case 4:

        alert ("Vas a cambiar de euros a Franco Suizos");

        var euros = parseFloat(prompt("Ingrese Cantidad de euros"));

        let francos = euros * 0.93;

        alert("Su cambio de euros a dolar es " + francos);

        break;

    case 5:

        alert ("Vas a cambiar de euros a Corona Noruega");

        var euros = parseFloat(prompt("Ingrese Cantidad de euros"));

        let corona = euros * 11.78;

        alert("Su cambio de euros a dolar es " + corona);

        break;

    default:
        alert ("Saliendo del programa...")
        break;
    }
}