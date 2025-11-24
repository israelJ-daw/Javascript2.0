// Estructura de control de bucles
// for

for (let i = 1; i<=10; i++){
    console.log  ("Este es el numero ", i)
}

const myarray = [1,2,3,4,5,6,7]
myarray.push(9)
for (let i = 0; i < myarray.length; i++) {
  let total = myarray[i]*2
  console.log(total)
}


// while, cuidado con aumentarlas condiciones
let j= 0
while (j<4){
    console.log("J con while "+j)
    j++
}

// Do while, se ejecuta una vez, independientemente del while
let k = 8
do {
    console.log("k con do while "+k)
    k++
} while (k<7)

// iteradores,algo salio en los maps en keys
//for of
const  myArray3 = new Array("Aritz","Antonio","Juan","Juan")
let mySet = new Set(["Aritz2","Antonio2","Juan2",33])
let myMap = new Map([
    [1,"Antonio"],
    [2,"Juan"],
    [3,"Manuel"],
    [4,"Aritz"],
])

for(let valor of myArray3){
    console.log(valor)
}

for(let valor of mySet){
    console.log(valor)
}
for(let valor of myMap){
    console.log(valor)
}

let myString="Hola 2º DAW"
for(let valor of myString){
    console.log(valor)
}

// Detalles en los bucles
// buenas prácticas uso del break y continue
const  myArray4 = new Array("Aritz","Antonio","Juan","Juan")
for (let index = 0; index < myArray4.length; index++) {
    console.log(myArray4[index])
}

//no quiero que se mueste Antonio
for (let index = 0; index < myArray4.length; index++) {
    if (myArray4[index] =="Antonio"){
        continue
    }
    console.log(myArray4[index])
}

//Al encontar el primer Antonio, me salgo sin mostrar
for (let index = 0; index < myArray4.length; index++) {
    if (myArray4[index] =="Antonio"){
        break
    }
    console.log(myArray4[index])
}


// bucle for of 


let palabra = "hola";

for (let letra of palabra) {
    console.log(letra);
}

// Salida:
// "h"
// "o"
// "l"
// "a"

let frutas = ["manzana", "banana", "naranja"];

for (let fruta of frutas) {
    console.log(fruta);
}

// Salida:
// "manzana"
// "banana"
// "naranja"
