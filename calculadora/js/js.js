function ponerNumero(numero){
    let pantalla = document.getElementById('text');
    pantalla.value += numero;
}


function ponerOperador(operador) {
    let pantalla = document.getElementById('text');
    pantalla.value += operador; 
}

function borrar(){
    let pantalla = document.getElementById('text');
    pantalla.value = '';
}

function calcular(){
    let pantalla = document.getElementById('text');
    if (pantalla.value !== "") {
        pantalla.value = eval(pantalla.value); 
    }
}

function elevar(){
    let pantalla = document.getElementById('text');
    let num = parseFloat(pantalla.value);
    pantalla.value = num*num;
}

document.querySelectorAll('button').forEach(boton =>{
    boton.onmouseover = () => {
        let valor = boton.textContent.trim();

    if (isNaN(valor) || valor === "") {
      boton.style.backgroundColor = "yellow";
    } 
    else if (valor % 2 === 0) {
      boton.style.backgroundColor = "red";
    } 
    else {
      boton.style.backgroundColor = "green";
    }
  };
  boton.onmouseout = () => {
    boton.style.backgroundColor = "";
  };
});

