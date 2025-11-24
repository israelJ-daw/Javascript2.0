let r = prompt("Introduce el radio del circulo");
r = parseFloat(r);

const PI = 3.14;

let area =  4* PI * r**2;

let volumen = 4/3 * PI  * r**3;


document.getElementById('area').textContent = "El area del circulo es: " + area;
document.getElementById('volumen').textContent = "El volumen del circulo es: " + volumen;