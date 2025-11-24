let x = parseInt(prompt("introduce un cordenada X"));
let y = parseInt(prompt("introduce un cordenada Y"));

if (x>0 && y>0){
    document.getElementById('mensaje').textContent = "El punto " +x+ +y+ " está en el primer cuadrante";
}
else if (x<0 && y>0){
    document.getElementById('mensaje').textContent = "El punto " +x+ +y+ " está en el segundo cuadrante";
}
else if (x<0 && y<0){
    document.getElementById('mensaje').textContent = "El punto " +x+ +y+ " está en el tercer cuadrante";
}
else {
    document.getElementById('mensaje').textContent = "El punto " +x+ +y+ " está en el cuarto cuadrante";
}


