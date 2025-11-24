console.log("------ El objeto Document ------");
console.log(document);


//1 . Elementos y coleciones del DOM
console.log("------ Elementos y colecciones del DOM ------");

//1.1 Acceder a los elementos por id

let titulo = document.getElementById("titulo").textContent = "Este es el titulo modificado desde JavaScript";

document.getElementsByClassName("2")[0].textContent = "Este es el texto modificado desde JavaScript";


const parrafos = document.getElementsByTagName("p");


for (let i = 0; i < parrafos.length; i++) {
    alert(parrafos[i].textContent);
}



//------------------------------------------------------------
/*
<ul class="lista_principal">
    <li>prueba 1</li>
    <li>prueba 2</li>
</ul>
<ul>
    li>prueba 3</li>
</ul>
*/
const li = document.getElementsByTagName("li")
// [ li_1, li_2, li_3 ]

for (let i = 0; i < li.length; i++) {
    alert(li[i].textContent)
}
//------------------------------------------------------------
/*
<ul class="lista_principal">
    <li>prueba 1</li>
    <li>prueba 2</li>
</ul>
<ul>
    li>prueba 3</li>
</ul>
*/
const primer_li = document.querySelector(".lista_principal li")
// li --> <li>prueba 1</li>

alert(primer_li.textContent)

const lista_li = document.querySelectorAll(".lista_principal li")
// [ li_1, li_2]

for (let i = 0; i < lista_li.length; i++) {
    alert(lista_li[i].textContent)
}