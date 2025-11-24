let array1 = [1,2,3,4,5,6,7,8,9,10,11]




let resul = sumapares(array1)

alert (resul)



function sumapares(array1){

    let suma = 0

    for (let i = 0; i < array1.length; i++){
        if (array1[i] % 2 === 0){
            suma += array1[i];
        }
    }

    return suma
}

