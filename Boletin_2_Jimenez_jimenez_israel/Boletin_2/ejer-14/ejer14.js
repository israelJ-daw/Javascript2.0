let salarioH = 0,
  salarioM = 0,
  sexo = "",
  contadorM = 0,
  contadorH = 0;

let totalH = 0,
  totalM = 0;

while (true) {
  sexo = prompt("Indique su sexo ('M' o 'H') o (*) para terminar");

  sexo = sexo.toUpperCase();

  if (sexo == "*") {
    break;
  }

  while (sexo != "M" && sexo != "H") {
    alert("No existen mas sexo. Indique M o H");

    sexo = prompt("Indique su sexo ('M' o 'H')").toUpperCase();
  }

  if (sexo == "M") {
    contadorM++;

    alert("Ha selecionado el sexo MUJER");

    salarioM = parseInt(prompt("Indique su salario (1000 - 2000)"));

    while (salarioM < 1000 || salarioM > 2000) {
      salarioM = parseInt(prompt("Indique su salario (1000 - 2000)"));
    }

    totalM += salarioM;
  } else {
    contadorH++;

    alert("Ha selecionado el sexo HOMBRE");

    salarioH = parseInt(prompt("Indique su salario (1000 - 2000)"));

    while (salarioH < 1000 || salarioH > 2000) {
      salarioH = parseInt(prompt("Indique su salario (1000 - 2000)"));
    }

    totalH += salarioH;
  }
}

let mediaH = totalH / contadorH;
let mediaM = totalM / contadorM;

document.getElementById("hombre").textContent +=
  "La media de salarios de hombre es de: " + mediaH;
document.getElementById("mujer").textContent +=
  "La media de salarios de mujer es de: " + mediaM;
