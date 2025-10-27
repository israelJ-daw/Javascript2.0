let array1 = ["hola", "mundo", "javascript"];


mayus(array1);


alert(mayus(array1));

function mayus (array1){
    let array2 = [];

    for (let i = 0; i < array1.length; i++) {
        array2.push(array1[i].toUpperCase());
    }
    return array2;
}