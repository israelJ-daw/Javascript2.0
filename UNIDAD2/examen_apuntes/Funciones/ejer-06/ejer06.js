let array1 = ["hola", "pepe", "adios", "mundo"]
let array2 = ["hola", "mundo", "manolo" ,"cosa"]
function comunes(array1, array2) {
    let array3 = [];

    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i]) && !array3.includes(array1[i])) {
            array3.push(array1[i]);
        }
    }

    return array3;
}

let comunes2 = comunes(array1, array2);

alert (comunes2);