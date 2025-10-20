let año;

do {
    año = parseInt(prompt("introduce un año:"));

} while (año < 0);


if (año % 4 == 0 && año % 100 !=0 || año % 400 == 0){

    document.getElementById('mensaje').textContent = "El año " + año + " es bisiesto";
}
else {
    document.getElementById('mensaje').textContent = "El año " + año + " no es bisiesto";
};

