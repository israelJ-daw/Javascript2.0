let nota;

do {
    nota = parseFloat(prompt("Introduzca nota (0-10)"));
} while (nota < 0 || nota > 10);

if (nota < 5) {
  document.getElementById("notas").textContent += "SUSPENSO";
} else if (nota >= 5 && nota < 6) {
  document.getElementById("notas").textContent += "APROBADO";
} else if (nota >= 6 && nota <= 7) {
  document.getElementById("notas").textContent += "BIEN";
} else if (nota >= 7 && nota <= 8) {
  document.getElementById("notas").textContent += "NOTABLE";
} else {
  document.getElementById("notas").textContent += "SOBRESALIENTE";
}


