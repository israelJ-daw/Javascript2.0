let cantidad = parseFloat(prompt("Ingrese cantidad de dinero"));

let contador2 = 0,
  contador1 = 0,
  contador050 = 0,
  contador020 = 0,
  contador010 = 0,
  contador005 = 0,
  contador002 = 0,
  contador001 = 0;

while (cantidad < 0) {
  cantidad = parseFloat(prompt("Ingrese cantidad mayor que cero"));
}


let centimos =  Math.round ( cantidad * 100);

//mejor hacerlo enscentimos lo hacemos normal y da error los decimales

while (centimos > 0) {
  if (centimos >= 200) {
    centimos -= 200;
    contador2++;
  } else if (centimos >= 100) {
    centimos -= 100;
    contador1++;
  } else if (centimos >= 50) {
    centimos -= 50;
    contador050++;
  } else if (centimos >= 20) {
    centimos -= 20;
    contador020++;
  } else if (centimos >= 10) {
    centimos -= 10;
    contador010++;
  } else if (centimos >= 5) {
    centimos -= 5;
    contador005++;
  } else if (centimos >= 2) {
    centimos -= 2;
    contador002++;
  } else if (centimos >= 1) {
    centimos -= 1;
    contador001++;
  }
}

document.getElementById("2").textContent += contador2;
document.getElementById("1").textContent += contador1;
document.getElementById("0.50").textContent += contador050;
document.getElementById("0.20").textContent += contador020;
document.getElementById("0.10").textContent += contador010;
document.getElementById("0.05").textContent += contador005;
document.getElementById("0.02").textContent += contador002;
document.getElementById("0.01").textContent += contador001;
