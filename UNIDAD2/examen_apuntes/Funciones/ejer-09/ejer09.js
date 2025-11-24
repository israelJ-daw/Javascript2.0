let frase = prompt ("Ingrese frase")


alert (invertir(frase       ))

function invertir(frase){
 
    let palabra = frase.split(" ")
    let invertido = palabra.reverse()

    let resultado = invertido.join(" ")

    return resultado
}