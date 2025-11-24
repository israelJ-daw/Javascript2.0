let array1 = [1,2,3,4,5,6]




let resultado = elevar(array1)

alert (resultado)

function elevar (array1){
    let array2 = []

    for (let i = 0; i < array1.length; i++){
       let  elevado = array1[i] **2;
        array2.push(elevado)
    }

    return array2;
}