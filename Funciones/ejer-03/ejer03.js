
let palabra = prompt("Escriba una palabra")


vocales(palabra)

let contador = vocales(palabra)

alert (contador)


function vocales (palabra){
    let contador = 0;

    for (let index = 0; index < palabra.length; index++) {
        
        let vocal = palabra[index].toLowerCase();

        if (vocal == 'a' || vocal == 'e' || vocal == 'i' || vocal == 'o' || vocal == 'u'){
            contador ++;
        } 

    }

    return contador
} 


